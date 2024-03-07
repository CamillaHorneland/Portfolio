import React from 'react';

function ContactPage() {
  return (
    <>
      <div className="sm:mt-0 mt-20 mb-20 sm:pt-0 pt-20">
        <h1 className="text-4xl font-bold font-cursive text-gray-600 m-10">Hello there!</h1>
        <div className="text-gray-500 m-10 font-sans leading-loose">
          <p className="mb-5">
            As a recent graduate stepping into the world of front-end development, I am eager to embark on exciting projects. Whether it's improving user experiences, refining interfaces, or creating user-friendly websites, I'm here to contribute my skills.
          </p>
          <p className="mb-5">
            My focus is on crafting visually appealing and intuitive solutions. I am still in the early stages of my career but bring fresh perspectives and a strong foundation in front-end development. Embracing remote work, I'm excited about opportunities to collaborate with clients globally.
          </p>
          <p className="mb-5">
            If you're seeking a dedicated front-end developer with a passion for user-friendly design, let's connect.
          </p>
        </div>
		<div className='text-center'>
        <a
          href="mailto:camilla_horneland@hotmail.com"
          className="text-gray-500 py-3 px-10 rounded bg-pink-200 shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink-300 before:duration-500 before:ease-out hover:shadow-pink-500"
        >
          camilla_horneland@hotmail.com
        </a>
		</div>
      </div>
    </>
  );
}

export default ContactPage;

