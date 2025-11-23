import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyBeKEDY08i-fm3npCp8lTADi0Cz3ANVYbM';

async function testCurrentKey() {
  console.log('🔐 Testing your current API key...\n');
  
  try {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    
    console.log('🔄 Making API call...');
    const result = await model.generateContent("Just say 'OK' if this works");
    const response = await result.response;
    
    console.log('✅ SUCCESS! API Key is working');
    console.log('Response:', response.text());
    
  } catch (error) {
    console.log('❌ API Error:', error.message);
    
    // Specific error handling
    if (error.message.includes('API_KEY_INVALID')) {
      console.log('\n🔑 Issue: Invalid API key');
      console.log('   Get a new key from: https://aistudio.google.com/');
    } else if (error.message.includes('not found')) {
      console.log('\n🚫 Issue: Generative AI API not enabled');
      console.log('   Enable it here: https://console.cloud.google.com/apis/library/generativelanguage.googleapis.com');
    } else if (error.message.includes('quota')) {
      console.log('\n📊 Issue: Quota exceeded or billing not set up');
      console.log('   Set up billing: https://console.cloud.google.com/billing');
    } else {
      console.log('\n🔧 Unknown issue - checking API status...');
    }
  }
}

testCurrentKey();