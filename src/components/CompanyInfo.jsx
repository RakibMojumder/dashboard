const CompanyInfo = () => {
  return (
    <div className="flex-1 bg-primary p-5 rounded-2xl">
      <h3 className="text-2xl font-semibold">Company Info</h3>
      <div className="mt-8 space-y-7">
        <div className="flex flex-col lg:flex-row items-center gap-5 w-full">
          <div className="w-full lg:w-1/2">
            <label className="block mb-2">Company Name*</label>
            <input
              type="text"
              placeholder="Company name"
              className="w-full py-1.5 px-3 rounded-lg bg-transparent border border-neutral-500 focus:outline-none"
            />
          </div>
          <div className="w-full lg:w-1/2">
            <label className="block mb-2">Company Website*</label>
            <input
              type="text"
              placeholder="Company website"
              className="w-full py-1.5 px-3 rounded-lg bg-transparent border border-neutral-500 focus:outline-none"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row items-center gap-5 w-full">
          <div className="w-full xl:w-1/2">
            <label className="block mb-2">Company Name*</label>
            <div className="flex items-center gap-x-5">
              <input
                type="text"
                placeholder="+87"
                className="w-20 py-1.5 px-3 rounded-lg bg-transparent border border-neutral-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="0186545543"
                className="flex-1 py-1.5 px-3 rounded-lg bg-transparent border border-neutral-500 focus:outline-none"
              />
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <label className="block mb-2">Contact Email*</label>
            <input
              type="text"
              placeholder="Contact email"
              className="w-full py-1.5 px-3 rounded-lg bg-transparent border border-neutral-500 focus:outline-none"
            />
          </div>
        </div>
        <textarea
          rows="6"
          value="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus maiores cumque ducimus vel iure ipsa nihil labore dolorem earum consequuntur explicabo sapiente nam accusantium assumenda doloremque dicta, laudantium sit quos odit nisi quia minus? Eveniet facere ipsa id neque eaque veniam libero iusto asperiores cum! Dolore officia ea accusantium error?"
          className="w-full p-3 bg-transparent border border-neutral-500 rounded-lg focus:outline-none"
        ></textarea>
        <button className="py-2 px-10 bg-accent rounded-lg">Save</button>
      </div>
    </div>
  );
};

export default CompanyInfo;
