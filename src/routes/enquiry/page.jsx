import React from 'react'
import logo from '@/assets/imscovo.jpg'
const page = () => {
  return (
   
 <>
 
 <div className="max-w-8xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-green-500">Kit19 Enquiry Page Documentation</h1>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">1. Enquiry Dashboard</h2>
        <p className="text-gray-700 mt-2">The central hub where all incoming inquiries are displayed. Key components include:</p>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Search Bar:</strong> Locate specific inquiries using keywords or filters.</li>
          <li><strong>Filter Options:</strong> Sort inquiries by date, source, status, or assigned personnel.</li>
          <li><strong>Enquiry List:</strong> Displays a table with Enquiry ID, Date, Source, Assigned To, Status, and Actions.</li>
        </ul>
      </section>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/CapPut6Vb6Q?si=ooXMOVZc2MTkfemZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">2. Action Buttons</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>View Details:</strong> Opens a detailed view of the enquiry.</li>
          <li><strong>Edit:</strong> Modify enquiry details or update status.</li>
          <li><strong>Assign:</strong> Assign the enquiry to a team member.</li>
          <li><strong>Delete:</strong> Remove the enquiry (restricted permissions).</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">3. Bulk Actions</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Select All Checkbox:</strong> Selects/deselects all inquiries.</li>
          <li><strong>Bulk Assign:</strong> Assigns selected inquiries to a team member.</li>
          <li><strong>Bulk Update Status:</strong> Changes the status of selected inquiries.</li>
          <li><strong>Export:</strong> Exports inquiries to CSV/Excel.</li>
        </ul>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">4. Enquiry Details Page</h2>
        <ul className="list-disc list-inside text-gray-700 mt-2">
          <li><strong>Customer Information:</strong> Displays contact details and previous interactions.</li>
          <li><strong>Enquiry Content:</strong> Shows the original message.</li>
          <li><strong>Interaction History:</strong> Log of all actions taken.</li>
          <li><strong>Internal Notes:</strong> Comments or updates (not visible to the customer).</li>
        </ul>
      </section>
    </div>
      </>


  )
}

export default page