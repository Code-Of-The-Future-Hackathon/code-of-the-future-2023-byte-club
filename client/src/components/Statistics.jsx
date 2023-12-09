import { stats } from '../constants/index';

const Statistics = () => (
    <>
        <section className="container sm:pt-6 sm:pb-10 lg:pt-6 lg:pb-14 mx-auto">
            <div className="flex items-center justify-center">
                <div className="grid gap-10 my-8 sm:gap-20 sm:grid-cols-2 lg:gap-30 lg:grid-cols-3">
                    {stats.map((stat, index) => ( 
                        <div className="w-full max-w-xs text-center">
                            <div key={stat.id} className="object-cover object-center w-full h-60 mx-auto rounded-lg bg-white border-2 border-blue-200">
                                <div className="py-12 px-6">
                                    <h5 className="text-lg pb-4 font-bold ">{stat.title}</h5>
                                    <span className="font-medium ">{stat.value}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
)

export default Statistics;