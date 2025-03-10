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
      <div className="flex flex-col max-w-6xl mx-auto px-8 bg-white shadow-lg rounded-lg">
        
      <h2 className="text-3xl font-bold mt-8 mb-4 text-green-500">Onboarding Process for Kit19</h2>
      
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 1: Visit Kit19.com</h3>
      <p className="text-gray-700 mb-4">Navigate to <a href="https://www.kit19.com" className="text-blue-600 underline">www.kit19.com</a> to begin the onboarding process.</p>
      
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 2: Initial Sign-Up</h3>
      <p className="text-gray-700 mb-4">Click on the “SIGN UP” button on the homepage. You will be directed to a registration screen.</p>
      <div className="flex items-center">

      <img className=" lg:ml-32" src={signup1} alt=""  width={600} />
      </div>
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 3: Enter Email and Agree to Terms</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Input your email address (to be provided by the client).</li>
          <li>Select “I agree” to the terms and conditions.</li>
          <li>Click “Get Started” to proceed.</li>
      </ul>
      <img className=" lg:ml-32" src={signup2} alt=""  width={600} />
      
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 4: Username Creation</h3>
      <p className="text-gray-700 mb-4 font-semibold">Username Guidelines:</p>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Fill your First and Last name (admin).</li>
          <li>Create a concise username beginning with your company name (in short) followed by a unique enquiry ID generated at our internal CRM system.</li>
          <li>Example: For Elixir Trading, the username would be ET102356 (where ET denotes Elixir Trading and 102356 is the enquiry ID).</li>
          <li>Fill the full company name in the company tab.</li>
          <li><strong>Important:</strong> This username is for the super admin account and cannot be modified once set.</li>
      </ul>
      <img className=" lg:ml-32" src={signup3} alt=""  width={600} />
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 5: Receive Login Credentials</h3>
      <p className="text-gray-700 mb-4">The system will send your user ID and password via text message to the registered phone number.</p>
      <img className=" lg:ml-32" src={signup4} alt=""  width={600} />
      
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 6: Login Process</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Return to the login page.</li>
          <li>Enter the provided username and password to access your account.</li>
      </ul>
      <img className=" lg:ml-32" src={signup5} alt=""  width={600} />
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 7: Email Verification</h3>
      <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>Upon logging in, you will be prompted to verify your email.</li>
          <li>Click on “Verify Email” to receive an authentication link sent to your registered email address.</li>
          <li>Open the email and click the verification link to confirm your account.</li>
      </ul>
      <img className=" lg:ml-32" src={signup6} alt=""  width={600} />
      
      <h3 className="text-2xl font-semibold mt-6 mb-2 text-gray-700">Step 8: Final Login</h3>
      <p className="text-gray-700 mb-4">After successful email verification, return to <a href="https://www.kit19.com" className="text-blue-600 underline">www.kit19.com</a> and log in using your user ID and password. This will direct you to your dashboard.</p>
  </div>
    );
};

export default DashboardPage;
