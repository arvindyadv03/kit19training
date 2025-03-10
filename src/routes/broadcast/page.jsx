import React from 'react'
import broadcast1 from '@/assets/broadcast1.webp'
import broadcast2 from '@/assets/broadcast2.webp'
import broadcast3 from '@/assets/broadcast3.webp'
import broadcast4 from '@/assets/broadcast4.webp'
import broadcast5 from '@/assets/broadcast5.webp'
const page = () => {
  return (
   
 <>
  <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-green-500">Broadcast Feature in Kit19</h1>
            
            <p className="text-gray-700 mb-4">The "Broadcast" feature allows businesses to:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Send messages to a large group of recipients at once.</li>
                <li>Share updates, promotions, or announcements efficiently.</li>
            </ul>
            
            <h3 className="text-2xl font-bold mt-8 mb-4 text-green-500  00">Steps to Create a New Broadcast</h3>
            <ol className="list-decimal pl-6 mb-4 text-gry-700">
                <li>Click on the plus “+” icon in the top right corner.</li>
                <li>A new pop-up window opens; fill in the required details and save it.</li>
            </ol>
            <img className=" lg:ml-32" src={broadcast1} alt=""  width={600} />
            <h3 className="text-xl font-semibold mt-6 mb-2 text-green-700">Choosing Broadcast Method</h3>
            <p className="text-gray-700 mb-4">You can select from two methods:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Segmentation:</strong> Send targeted messages to specific groups based on criteria.</li>
                <li><strong>CSV:</strong> Upload a CSV file containing the recipient list.</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>Note:</strong> You can choose only one option from Segmentation or CSV.</p>

            <h3 className="text-2xl font-bold mt-6 mb-2 text-green-500">By Segmentation</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Name of Broadcast:</strong> Assign a unique name for identification.</li>
                <li><strong>Schedule Date & Time:</strong> Set when the broadcast should be sent.</li>
                <li><strong>Audience:</strong> Select recipients based on predefined categories (All Conversations, All Enquiries, All Leads).</li>
                <li><strong>Include Additional Mobile Numbers:</strong> Manually add numbers, one per line.</li>
                <li><strong>Include Recipient:</strong> Choose between already added contacts or all contacts.</li>
                <li><strong>Select Template:</strong> Pick a standardized message template.</li>
            </ul>
<img className=" lg:ml-32" src={broadcast2} alt=""  width={600} />
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">By CSV File</h3>
            <p className="text-gray-700 mb-4">Instructions for CSV upload:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Naming:</strong> Input a name for the broadcast.</li>
                <li><strong>Scheduling:</strong> Set date and time for the message.</li>
                <li><strong>Choosing Broadcast Method:</strong> Upload a CSV file.</li>
                <li><strong>Select Template:</strong> Choose from the available templates.</li>
                <li><strong>Upload CSV:</strong> Click “Choose File” and upload the CSV in the correct format.</li>
            </ul>
            <p className="text-gray-700 mb-4"><strong>CSV Format:</strong> The file should include columns such as  <span className='font-bold'>Serial Number, Mobile Number, and Placeholders</span> for personalized content.</p>
            <p className="text-gray-700 mb-4"><strong>Saving:</strong> Click “Save” to finalize.</p>
        <img className=" lg:ml-32" src={broadcast3} alt=""  width={600} />
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">Contact List Upload</h3>
            <p className="text-gray-700 mb-4">Bulk upload contacts using a file upload feature.</p>
            <ul className="list-disc pl-6 mb-4 text-gr-700">
                <li><strong>File Upload:</strong> Click “Select a file…” and choose an Excel Workbook.</li>
                <li><strong>Source Dropdown:</strong> Choose contact source (e.g., FranchiseIndia, WebForm, DemoTest).</li>
                <img className=" lg:ml-32" src={broadcast4} alt=""  width={600} />
                <li><strong>Communication Channel:</strong> Pre-selected as “WhatsApp.”</li>
                <li><strong>Action Buttons:</strong> Click “Upload” to proceed or “Cancel” to exit.</li>
                <img className=" lg:ml-32" src={broadcast5} alt=""  width={600} />
            </ul>

            
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-green-500">Broadcast Report</h3>
            <p className="text-gray-700 mb-4">Provides insights and analytics on broadcast messages, including delivery and read rates.</p>
        </div>
      </>


  )
}

export default page