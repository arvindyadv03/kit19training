import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { NavLink } from "react-router-dom";

import { useTheme } from "@/hooks/use-theme";

import { overviewData, recentSalesData, topProducts } from "@/constants";

import { Footer } from "@/layouts/footer";


import { CreditCard, DollarSign, Package, PencilLine, Star, Trash, TrendingUp, Users, Cast } from "lucide-react";

const DashboardPage = () => {
    const { theme } = useTheme();

    return (
        <div className="flex flex-col gap-y-4">
            <h1 className="title text-green-500">Reporsts Guide in Kit19</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                <div className="card">
                    <div className="card-header">
                        <div className="w-fit rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                            <Package size={26} />
                        </div>
                        <NavLink
                            to={"/mailmarketing"}
                        >
                            <p className="card-title">Email Marketing</p>
                        </NavLink>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            Template Creation, Campaign Sceduling etc..
                        </p>

                    </div>
                </div>
                <NavLink
                    to={"/broadcast"}
                >
                    <div className="card">
                        <div className="card-header">
                            <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                                <Cast size={26} />
                            </div>
                            <p className="card-title">SMS</p>
                        </div>
                        <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                            <p className="text-xl font-bold text-slate-900 transition-colors dark:text-slate-50">Bulk SMS Sending and Sceduling</p>

                        </div>
                    </div>
                </NavLink>
                <NavLink
                    to={"/watemplate"}
                >
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                            <Users size={26} />
                        </div>
                      
                            <p className="card-title">Automated Campaign</p>
                     
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-xl font-bold text-slate-900 transition-colors dark:text-slate-50">
                            Event / Scheduling SMS, Mail and Voice Campaign
                        </p>

                    </div>
                </div>
                </NavLink>
                <div className="card">
                    <div className="card-header">
                        <div className="rounded-lg bg-green-500/20 p-2 text-green-500 transition-colors dark:bg-green-600/20 dark:text-green-600">
                            <CreditCard size={26} />
                        </div>
                        <p className="card-title">Chatbot Guide</p>
                    </div>
                    <div className="card-body bg-slate-100 transition-colors dark:bg-slate-950">
                        <p className="text-2xl font-bold text-slate-900 transition-colors dark:text-slate-50">Auto Reply</p>

                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-7">
                <div className="card col-span-1 md:col-span-2 lg:col-span-4">
                    <div className="card-header">
                        <p className="card-title">Complete Tutorial Video</p>
                    </div>
                    <div className="card-body p-0">
                        <ResponsiveContainer
                            width="100%"
                            height={300}
                        >
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/MRNKZoAnTIg?si=UgNF14r30SVMPv_2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
    );
};

export default DashboardPage;
