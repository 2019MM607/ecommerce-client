import { Link } from "react-router-dom";
export const Home = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div
        className="hero-content flex-col lg:flex-row-reverse"
        style={{
          backgroundImage:
            "https://images.unsplash.com/photo-1585620385456-4759f9b5c7d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FtbWluZ3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1 className="text-5xl font-bold">The best admin store</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <Link to="/products" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
