import requests
import sys
import json
from datetime import datetime

class FinxiaAPITester:
    def __init__(self, base_url="https://finxia-preview.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, headers=None):
        """Run a single API test"""
        url = f"{self.base_url}/{endpoint}"
        if headers is None:
            headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        print(f"   URL: {url}")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)
            elif method == 'PUT':
                response = requests.put(url, json=data, headers=headers, timeout=10)
            elif method == 'DELETE':
                response = requests.delete(url, headers=headers, timeout=10)

            success = response.status_code == expected_status
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    response_data = response.json()
                    print(f"   Response: {json.dumps(response_data, indent=2)}")
                    return True, response_data
                except:
                    print(f"   Response: {response.text}")
                    return True, {}
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                print(f"   Response: {response.text}")
                self.failed_tests.append({
                    'name': name,
                    'expected': expected_status,
                    'actual': response.status_code,
                    'response': response.text
                })
                return False, {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({
                'name': name,
                'error': str(e)
            })
            return False, {}

    def test_health_endpoints(self):
        """Test health check endpoints"""
        print("\n" + "="*50)
        print("TESTING HEALTH ENDPOINTS")
        print("="*50)
        
        # Test root API endpoint
        self.run_test(
            "Root API Endpoint",
            "GET",
            "api/",
            200
        )
        
        # Test health check endpoint
        self.run_test(
            "Health Check Endpoint",
            "GET",
            "api/health",
            200
        )

    def test_contact_form_submission(self):
        """Test contact form functionality"""
        print("\n" + "="*50)
        print("TESTING CONTACT FORM")
        print("="*50)
        
        # Test valid contact form submission
        test_data = {
            "name": "Jean Dupont",
            "email": "jean.dupont@test.com",
            "company": "Test Investment Fund",
            "investor_type": "institutional",
            "message": "Je suis intéressé par vos stratégies d'investissement en logistique européenne.",
            "language": "fr"
        }
        
        success, response = self.run_test(
            "Contact Form Submission (Valid)",
            "POST",
            "api/contact",
            200,
            data=test_data
        )
        
        if success and response:
            contact_id = response.get('id')
            if contact_id:
                print(f"   Contact ID: {contact_id}")
            else:
                print("   Warning: No contact ID returned")
        
        # Test English contact form
        test_data_en = {
            "name": "John Smith",
            "email": "john.smith@institutional.com",
            "company": "European Pension Fund",
            "investor_type": "institutional",
            "message": "I would like to learn more about your European real estate strategies and investment opportunities.",
            "language": "en"
        }
        
        self.run_test(
            "Contact Form Submission (English)",
            "POST",
            "api/contact",
            200,
            data=test_data_en
        )

    def test_contact_form_validation(self):
        """Test contact form validation"""
        print("\n" + "="*50)
        print("TESTING CONTACT FORM VALIDATION")
        print("="*50)
        
        # Test missing required fields
        invalid_data = {
            "name": "",  # Empty name
            "email": "invalid-email",  # Invalid email
            "message": "Too short"  # Too short message
        }
        
        self.run_test(
            "Contact Form Validation (Invalid Data)",
            "POST",
            "api/contact",
            422,  # Validation error
            data=invalid_data
        )
        
        # Test missing email
        missing_email_data = {
            "name": "Test User",
            "message": "This is a test message that should be long enough to pass validation requirements."
        }
        
        self.run_test(
            "Contact Form Validation (Missing Email)",
            "POST",
            "api/contact",
            422,
            data=missing_email_data
        )

    def test_status_endpoints(self):
        """Test status check endpoints"""
        print("\n" + "="*50)
        print("TESTING STATUS ENDPOINTS")
        print("="*50)
        
        # Test status creation
        status_data = {
            "client_name": "test_client_finxia"
        }
        
        success, response = self.run_test(
            "Create Status Check",
            "POST",
            "api/status",
            200,
            data=status_data
        )
        
        # Test getting status checks
        self.run_test(
            "Get Status Checks",
            "GET",
            "api/status",
            200
        )

    def test_contact_retrieval(self):
        """Test contact form retrieval (admin endpoint)"""
        print("\n" + "="*50)
        print("TESTING CONTACT RETRIEVAL")
        print("="*50)
        
        self.run_test(
            "Get Contact Submissions",
            "GET",
            "api/contact",
            200
        )

    def run_all_tests(self):
        """Run all backend tests"""
        print("🚀 Starting FINXIA Capital Backend API Tests")
        print(f"📡 Testing against: {self.base_url}")
        
        start_time = datetime.now()
        
        self.test_health_endpoints()
        self.test_contact_form_submission()
        self.test_contact_form_validation()
        self.test_status_endpoints()
        self.test_contact_retrieval()
        
        end_time = datetime.now()
        duration = (end_time - start_time).total_seconds()
        
        # Print results
        print("\n" + "="*70)
        print("🎯 BACKEND API TEST RESULTS")
        print("="*70)
        print(f"✅ Tests passed: {self.tests_passed}/{self.tests_run}")
        print(f"⏱️ Duration: {duration:.2f} seconds")
        
        if self.failed_tests:
            print(f"\n❌ Failed tests ({len(self.failed_tests)}):")
            for i, test in enumerate(self.failed_tests, 1):
                print(f"   {i}. {test['name']}")
                if 'error' in test:
                    print(f"      Error: {test['error']}")
                else:
                    print(f"      Expected: {test['expected']}, Got: {test['actual']}")
        
        success_rate = (self.tests_passed / self.tests_run * 100) if self.tests_run > 0 else 0
        print(f"\n📊 Success Rate: {success_rate:.1f}%")
        
        return self.tests_passed == self.tests_run

def main():
    tester = FinxiaAPITester()
    success = tester.run_all_tests()
    return 0 if success else 1

if __name__ == "__main__":
    sys.exit(main())