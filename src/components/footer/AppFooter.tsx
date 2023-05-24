import Link from "next/link";

const AppFooter = () => {
  return (
    <footer className="w-full bg-slate-900 flex items-center text-white py-6">
      <div className="grid gap-3 grid-cols-1 lg:grid-cols-4 container mx-auto text-sm">
        <div>
          <h5 className="font-bold text-lg">Shop</h5>
          <ul>
            <li>Daily deals</li>
            <li>App only deals</li>
            <li>Clearance sales</li>
            <li>Gift vouchers</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg">Help</h5>
          <ul>
            <li>Help Center</li>
            <li>Contact us</li>
            <li>Submit an idea</li>
            <li>Suggest a product</li>
            <li>Shipping & delivery</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg">Company</h5>
          <ul>
            <li>About us</li>
            <li>Careers</li>
            <li>Competitions</li>
            <li>Press & News</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-lg">Follow us</h5>
          <ul>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
