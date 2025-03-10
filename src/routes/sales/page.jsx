import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

import { useTheme } from "@/hooks/use-theme";
import { NavLink } from "react-router-dom";

import { overviewData, recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";

import { CreditCard, Receipt, Package, Percent, Star, Trash, TrendingUp, Users, Cast} from "lucide-react";

const page = () => {
    const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-y-4">
    <h1 className="title text-green-500">KIT19 Sales Tutorial</h1>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <NavLink
         to={"/enquiry"}
        >   
                 <div className="card">
            <div className="card-header">
                <div className="w-fit rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                    <Package size={26} />
                </div>
                <p className="card-title text-2xl font-bold">Enquiries</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className=" font-bold text-slate-900 transition-colors dark:text-slate-50">Enquiry Creation, Bulk Uploading, Integration and more... </p>
                
            </div>
        </div>
        </NavLink>

        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                    <Receipt size={26} />
                </div>
                <p className="card-title text-xl font-bold">Lead Management</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className="font-bold text-slate-900 transition-colors dark:text-slate-50">Lead Distribution, Segmentation, Followups, Lead activity and more...</p>
               
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                    <Receipt size={26} />
                </div>
                <p className="card-title text-xl font-bold">Quotation and Invoice</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className=" font-bold text-slate-900 transition-colors dark:text-slate-50">Response Capture, Call To Action Etc..</p>
        
            </div>
        </div>
        <div className="card">
            <div className="card-header">
                <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                    <Percent size={26} />
                </div>
                <p className="card-title text-xl font-bold">Pipeline Deals</p>
            </div>
            <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                <p className=" font-bold text-slate-900 transition-colors dark:text-slate-50">Deal Stage and History</p>
                
            </div>
        </div>
    </div>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="card col-span-1 md:col-span-2 lg:col-span-4">
            <div className="card-header">
                <p className="card-title">Complete Lead Management Tutorial</p>
            </div>
            <div className="card-body p-0">
                <ResponsiveContainer
                    width="100%"
                    height={300}
                >
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/uGJSz56E_do?si=eGLlfZB4sKMbZ4RH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </ResponsiveContainer>
            </div>
        </div>
        <div className="card col-span-1 md:col-span-2 lg:col-span-3">
            <div className="card-header">
                <p className="card-title font-extrabold">Top Queries regarding Whatsapp Business Platform </p>
            </div>
            <div className="card-body h-[300px] overflow-auto p-0">
                {recentSalesData.map((sale) => (
                    <div
                        key={sale.id}
                        className="flex items-center justify-between gap-x-4 py-2 pr-2"
                    >
                        <div className="flex items-center gap-x-4">
                           
                            <div className="flex flex-col gap-y-2">
                                <p className="font-medium text-slate-900 dark:text-slate-50">{sale.name}</p>
                                
                            </div>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    </div>
    <div className="card">
        <div className="card-header">
            <p className="card-title">Frequently Asked Questions</p>
        </div>
        <div className="card-body p-0">
            <div className="relative h-[500px] w-full flex-shrink-0 overflow-auto rounded-none [scrollbar-width:_thin]">
                <table className="table">
                    <thead className="table-header">
                        <tr className="table-row">
                            <th className="table-head">#</th>
                            <th className="table-head">Questions</th>
                            
                           
                          
                        </tr>
                    </thead>
                    <tbody className="table-body">
                        {topProducts.map((product) => (
                            <tr
                                key={product.number}
                                className="table-row"
                            >
                                <td className="table-cell">{product.number}</td>
                                <td className="table-cell">
                                    <div className="flex w-max gap-x-4">
                                   
                                        <div className="flex flex-col">
                                            <p>{product.name}</p>
                                            <p className="font-normal text-slate-600 dark:text-slate-400">{product.description}</p>
                                        </div>
                                    </div>
                                </td>
                                
                                <td className="table-cell">
                                    
                                       
                                     
                                </td>
                                
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <Footer />
</div>
  )
}

export default page