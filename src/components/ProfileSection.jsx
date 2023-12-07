// components/ProfileSection.js

const ProfileSection = () => {
    return (
      <div className="bg-black text-white py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <img
            className="rounded-full mx-auto mb-6 h-32 w-32 lg:h-40 lg:w-40"
            src="/images/my-profile.jpg" // Replace with the URL or path to your profile image
            alt="Profile"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Vikas Saini
          </h2>
          <p className="text-sm md:text-md lg:text-lg mb-8 uppercase text-purple-500">
            Web Developer
          </p>
          <p className="text-sm md:text-base lg:text-lg mb-8 text-gray-500">
            Passionate web developer with expertise in creating
            interactive and user-friendly web apps.
          </p>
          <div className="flex justify-center space-x-4">
            {/* Replace the social links with your own */}
            <a
              href="https://github.com/vikas-saini-7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
              <img src="/images/github.png" className="w-10" alt="" />
            </a>
            <a
              href="https://www.linkedin.com/in/vikas-saini-602b96227"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
                <img src="/images/linkedin.png" className="w-10" alt="" />
            </a>
            <a
              href="https://www.instagram.com/the_vikas_saini"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl"
            >
                <img src="/images/instagram.png" className="w-10" alt="" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProfileSection;
  