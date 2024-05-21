const OrderPage = () => {
  return (
    <>
      <div className="bg-base-200 min-h-screen hero">
        <div className="lg:flex-row-reverse flex-col hero-content">
          <div className="text-center lg:text-left">
            <h1 className="font-bold text-5xl">
              Order your required medicine!
            </h1>
            <p className="py-6">
              This is your final stop before getting the meds you need
              delivered. Here, you can: Review your order: Double-check the
              medications, quantities, and any special instructions. Update
              delivery details: Confirm your shipping address and choose a
              delivery option if available. Securely checkout: Pay for your
              order using our safe and trusted payment system. Almost there!
              Once you confirm, we'll get your medications on their way.
            </p>
          </div>
          <div className="bg-base-100 shadow-2xl w-full max-w-sm card shrink-0">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Full address</span>
                </label>
                <input
                  type="text"
                  placeholder="Your shipping address"
                  className="input-bordered input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Contact number</span>
                </label>
                <input
                  type="number"
                  placeholder="Your contact number"
                  className="input-bordered input"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Division</span>
                </label>
                <select className="w-full max-w-xs select-bordered select">
                  <option disabled selected>
                    Select your division
                  </option>
                  <option>Rajshahi</option>
                  <option>Dhaka</option>
                  <option>Barishal</option>
                  <option>Khulna</option>
                  <option>Sylhet</option>
                  <option>Rangpur</option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Custom note </span>
                </label>
                <textarea
                  className="textarea"
                  placeholder="Any notes..."
                ></textarea>
                <label className="label"></label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Confirm your order</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderPage;
