const Home = () => {
  return (
    <div>
      <div className="bg-base-200 min-h-screen hero">
        <div className="lg:flex-row-reverse flex-col hero-content">
          <img
            src="/medicine-pic.jpg"
            className="shadow-2xl rounded-lg max-w-sm"
          />
          <div>
            <h1 className="font-bold text-5xl">
              Revolutionize your healthcare. Get meds delivered with ease.
            </h1>
            <p className="py-6">
              MedExpress simplifies your medicine routine. Refill prescriptions,
              manage deliveries, and track your health - all from the
              convenience of your phone. Skip the pharmacy lines and save time
              for what matters. Download MedExpress today!
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
