import React from 'react'
import logo from '@/assets/imscovo.jpg'
import ims1 from '@/assets/ims1.webp'
import ims2 from '@/assets/ims2.webp'
const page = () => {
  return (
   
 <>
 <div className="max-w-6xl mx-auto px-6 pb-6 pt-2 bg-white shadow-lg rounded-lg">
            <h1 className="text-4xl font-bold mb-6 text-green-600">IMS Conversations Panel (Kit19 Interface)</h1>
            
            <p className="text-gray-700 mb-4">This section serves as the hub for viewing and managing customer interactions. Businesses can:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>View incoming and outgoing messages.</li>
                <li>Respond to customer inquiries in real-time.</li>
                <li>Categorize and prioritize conversations.</li>
                <li>Send Templates as well.</li>
            </ul>
             <img className=" lg:ml-32" src={ims1} alt=""  width={600} />
            <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-800">Explanation of the IMS Conversations Panel</h2>
            
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Lead, Enquiry, and Team Tabs</h3>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Lead:</strong> Displays the total number of leads/chats (e.g., 6528) in the system.</li>
                <li><strong>Enquiry:</strong> Displays the total number of customer inquiries/chats (e.g., 3668).</li>
                <li><strong>Team:</strong> Displays the number of active team interactions/internal team chats (e.g., 64).</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Chat List (Left Panel)</h3>
            <p className="text-gray-700 mb-4">This panel shows all the ongoing conversations. Key features include:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Customer names and contact numbers.</li>
                <li>Time elapsed since the last message.</li>
                <li>Message previews for quick reference.</li>
                <li>Icons indicating message type (e.g., inbound call, bot message).</li>
            </ul>
             <img className=" lg:ml-32" src={ims2} alt=""  width={600} />
            
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Conversation Window (Center Panel)</h3>
            <p className="text-gray-700 mb-4">The center panel displays the active chat thread with detailed information such as:</p>
            <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Chat history, including timestamps.</li>
                <li>Bot responses and system notifications.</li>
            </ul>
            
            <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Action Buttons and Icons (Top Right)</h3>
            <p className="text-gray-700 mb-4">The “+” icon allows users to add new leads or notes directly from the interface.</p>
            <p className="text-gray-700 mb-4">Enter the details and click on the Save button.</p>
        </div>
      </>


  )
}

export default page