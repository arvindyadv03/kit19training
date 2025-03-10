import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { ThemeProvider } from "@/contexts/theme-context";
import { Footer } from "@/layouts/footer";

import Layout from "@/routes/layout";
import DashboardPage from "@/routes/dashboard/page";
import Sales from "@/routes/sales/page"

import Broadcast from "@/routes/broadcast/page"
import IMS from "@/routes/imsconvo/page"
import Watemplate from "@/routes/watemplate/page"
import Getstart from "@/routes/gettingstarted/page"
import Enquiry from "@/routes/enquiry/page"
import Promotions from "@/routes/promotions/page"
import Reports from "@/routes/reports/page"
import Mails from "@/routes/mailmarketing/page"

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout />,
            children: [
                {
                    index: true,
                    element: <Getstart/>,
                },
                {
                    path: "whatsapp",
                    element: <DashboardPage />,
                },
                {
                    path: "sales",
                    element: <Sales/>,
                },
                {
                    path: "reports",
                    element: <Reports/>,
                },
                {
                    path: "promotions",
                    element: <Promotions/>,
                },
                {
                    path: "mailmarketing",
                    element: <Mails/>,
                },
                {
                    path: "new-customer",
                    element: <h1 className="title">New Customer</h1>,
                },
                {
                    path: "verified-customers",
                    element: <h1 className="title">Verified Customers</h1>,
                },
                {
                    path: "products",
                    element: <h1 className="title">Products</h1>,
                },
                {
                    path: "new-product",
                    element: <h1 className="title">New Product</h1>,
                },
                {
                    path: "inventory",
                    element: <h1 className="title">Inventory</h1>,
                },
                {
                    path: "settings",
                    element: <h1 className="title">Settings</h1>,
                },
                {
                    path: "broadcast",
                    element:<Broadcast/>,
                },
                {
                    path: "convo",
                    element:<IMS/>,
                },
                {
                    path: "watemplate",
                    element:<Watemplate/>,
                },
                {
                    path: "enquiry",
                    element:<Enquiry/>,
                },
              

              
            ],
        },
    ]);

    return (
        <ThemeProvider storageKey="theme">
            <RouterProvider router={router} />
       
            
        </ThemeProvider>
          
    );
}

export default App;
