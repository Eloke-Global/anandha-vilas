
const RecentArticles = () => {
  return (
    <div className="w-full">
        <div className="w-full max-w-screen-1920 mx-auto">
            <div className="flex items-center flex-col pt-[72px] pb-32 gap-12">
                <div className="">
                    FROM OUR BLOG
                    <div>
                        RECENT ARTICLES
                    </div>
                </div>
                <div className="flex gap-5">
                    <div className="w-[375px] aspect-square bg-red-500 rounded-md p-[50px] flex flex-col justify-between">
                        <div className="px-4 bg-white max-w-min">RESTAURANT</div>
                        <div className="">Hello from blog article i am heading</div>
                    </div>
                    <div className="w-[375px] aspect-square bg-red-500 rounded-md"></div>
                    <div className="w-[375px] aspect-square bg-red-500 rounded-md"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RecentArticles