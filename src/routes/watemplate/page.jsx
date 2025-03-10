import React from 'react'
import logo from '@/assets/imscovo.jpg'
const page = () => {
  return (
   
 <>
 <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
 
        <h2 className="text-xl font-semibold mb-2 text-green-600">WhatsApp Template Configuration</h2>
        <p className="mb-4">Creating a WhatsApp template in Kit19 involves configuring predefined messages for efficient communication with your audience. Follow these steps:</p>
        
        <h3 className="text-lg font-medium mb-2 text-green-500">1. Access the WhatsApp Template Configuration Panel</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>Log in to your Kit19 account.</li>
          <li>Navigate to the 'Templates' section.</li>
          <li>Click on the plus “+” icon to open the new template configuration panel.</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-green-500">2. Define Template Details</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Template Name:</strong> Enter a unique name for your template.</li>
          <li><strong>Category:</strong> Choose from Marketing, Utility, or Authentication.</li>
          <li><strong>Language:</strong> Select the message language.</li>
          <li><strong>Template Type:</strong> Choose 'Standard (text only)' or 'Media & Interactive.'</li>
        </ul>
        
        <h3 className="text-lg font-medium mb-2 text-green-500">3. Configure Template Content</h3>
        <ul className="list-disc pl-5 mb-4">
          <li><strong>Header (for Media & Interactive templates):</strong> Choose the type of header—Text, Image, Document, or Video.</li>
          <li><strong>Body:</strong> Compose the main message content. Utilize placeholders for dynamic data to personalize messages.</li>
          <li><strong>Footer:</strong> Add any additional information or disclaimers.</li>
          <li><strong>Buttons:</strong></li>
          <ul className="list-disc pl-5">
            <li><strong>Quick Reply:</strong> Enable users to respond promptly with predefined replies.</li>
            <li><strong>Call to Action:</strong></li>
            <ul className="list-disc pl-5">
              <li><strong>URL:</strong> Direct users to a specific website.</li>
              <li><strong>Phone:</strong> Allow users to initiate a phone call directly.</li>
            </ul>
          </ul>
        </ul>

        <h3 className="text-lg font-medium mb-2 text-green-500">4. Preview and Submit</h3>
        <ul className="list-disc pl-5 mb-4">
          <li>After configuring the template, click on the 'Preview and Submit' button at the bottom right to review your template.</li>
          <li>Ensure all details are accurate and meet your requirements.</li>
          <li>Once satisfied, submit the template for approval.</li>
        </ul>
      </div>
      </>


  )
}

export default page