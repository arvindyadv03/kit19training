import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NavLink } from "react-router-dom";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";
import signup1 from "@/assets/signup1.webp"
import signup2 from "@/assets/signup2.webp"
import signup3 from "@/assets/signup3.webp"
import signup4 from "@/assets/signup4.webp"
import signup5 from "@/assets/signup5.webp"
import signup6 from "@/assets/signup6.webp"

import { Footer } from "@/layouts/footer";


import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users, Cast } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-2">

        <h1 className="text-4xl font-bold mb-6 text-green-600">Mail Template Creation in Kit19</h1>
          <iframe className="lg:ml-60 rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/Xg3odnzulvU?si=LoK4AQO1X9VzeSIO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-600">Navigation to Mail Template Creation</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Click on the Menu Icon.</li>
            <li>Navigate to Marketing.</li>
            <li>Click on Mail.</li>
            <li>Select Add Template.</li>
        </ul>

      
        
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-600">Creating a New Template</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Click on the Mail Icon to create a new template.</li>
            <li>Fill in the following fields:
                <ul className="list-disc pl-6">
                    <li>Template Name</li>
                    <li>Personalization Option (Yes/No)</li>
                    <li>Select Value From: Enquiry, Leads & Conversions</li>
                    <li>Select Event Option: General, Event-Based</li>
                    <li>Subject</li>
                </ul>
            </li>
            <li>Choose between:
                <ul className="list-disc pl-6">
                    <li>Drag & Drop Template Editor</li>
                    <li>Rich Text Editor</li>
                </ul>
            </li>
        </ul>
        
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-600">Saving the Mail Template</h2>
        <p className="text-gray-700 mb-4">Enter all required details and click the Save button.</p>
        
        <h1 className="text-4xl font-bold mb-6 text-green-600">Mail Delivery Report in Kit19</h1>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-600">Steps to Access the Mail Delivery Report</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Login to Kit19.</li>
            <li>Navigate to Marketing0 &gt; Promotion &gt; Mail &gt; Report &gt; Delivery Report.</li>
        </ul>
        <p className="text-gray-700 mb-4">View all email delivery reports for the selected date range.</p>
        
        <h1 className="text-4xl font-bold mb-6 text-green-600">Sending and Scheduling Mail</h1>
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-500">Sending Mail</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>Navigate to Marketing &gt; Promotion &gt; Mail &gt; Send Mail.</li>
            <li>Fill in the email details including recipient category, subject, and content.</li>
            <li>Click on the Send Mail button.</li>
        </ul>
        
        <h2 className="text-3xl font-bold mt-8 mb-4 text-green-500">Scheduling Mail</h2>
        <ul className="list-disc pl-6 mb-4 text-greay-700">
            <li>Navigate to Marketing &gt; Promotion  Mail &gt' Scheduled Mail.</li>
            <li>Fill in the email details and choose the schedule date and time.</li>
            <li>Click on the Schedule Mail button.</li>
        </ul>
        
        <p className="text-gray-700 mb-4">These steps ensure a smooth process for sending and scheduling emails in Kit19.</p>
    </div>

    );
};

export default DashboardPage;
