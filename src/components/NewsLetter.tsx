import { MailIcon } from "../../public/icons/Icons";

const NewsLetter = () => {
  return (
    <div className="relative mt-10 lg:mt-20 py-36 px-8 bg-neutralGray overflow-hidden">
      <h3 className="font-poppins text-3xl lg:text-5xl max-w-max mx-auto ">
        Join Our Newsletter
      </h3>
      <p className="max-w-max mx-auto mt-2 mb-8  lg:text-lg">
        Sign up for deals, new products and promotions
      </p>

      {/*TODO: make this a server action */}
      <form className="relative max-w-max mx-auto py-2.5 border-b border-zinc-400">
        <input
          type="email"
          className="placeholder-gray-500 pl-8 bg-transparent outline-none"
          placeholder="Email address"
        />
        <button type="button">Signup</button>
        <div className="absolute left-0 top-[50%] -translate-y-[50%]">
          <MailIcon />
        </div>
      </form>
      <div className="hidden lg:block absolute -left-[12%] -top-5 bottom-0 bg-[url('/bg/left-bg.png')] w-[25%] bg-center scale-110"></div>
      <div className="hidden lg:block absolute -right-[12%] -top-5 bottom-0 bg-[url('/bg/right-bg.png')] w-[25%] bg-left bg-cover scale-125"></div>
    </div>
  );
};

export default NewsLetter;
