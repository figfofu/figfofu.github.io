"use client";
import { motion } from "framer-motion";
import { Profile } from "@/lib/models/profile";
import { Button, Card, Modal } from "flowbite-react";
import banner from "../../images/banner.png";
import { fullName } from "@/lib/profile";
import React from "react";
import MyContact from "./Contact";
import MyEducation from "./Education";
import MyJobExperience from "./JobExperience";
import MyLanguage from "./Language";
import MyCertificate from "./Certificate";
import Publications from "./Publications";
import Skills from "./Skills";
import Interests from "./Interests";
// const cardVariants: Variants = {
//   offscreen: {
//     x: -1000,
//     opacity: 0,
//     visibility: "hidden",
//   },
//   onscreen: {
//     x: 0,
//     opacity: 1,
//     visibility: "visible",
//     transition: {
//       type: "spring",
//       bounce: 0.4,
//       duration: 0.8,
//     },
//   },
// };
type Props = {
  profile: Profile;
};

const MainInfo = ({ profile }: Props) => {
  const [showContact, setShowContact] = React.useState(false);
  return (
    <div className="flex w-full flex-col">
      <Card imgAlt="logo banner" imgSrc={banner.src} className="w-full">
        <div className="flex justify-end px-4 pt-4">
          {/* <Dropdown inline={true} label="">
            <Dropdown.Item>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Edit
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Export Data
              </a>
            </Dropdown.Item>
            <Dropdown.Item>
              <a
                href="#"
                className="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Delete
              </a>
            </Dropdown.Item>
          </Dropdown> */}
        </div>
        <div className="flex flex-col items-center pb-10">
          <img
            className="mb-3 h-24 w-24 rounded-full shadow-lg"
            src="https://media.licdn.com/dms/image/C4D03AQGaMYcWX_Cyww/profile-displayphoto-shrink_800_800/0/1517495042616?e=1687996800&v=beta&t=RxzEXEtjZXT5_HPbytNg13gMo0lysKRSEqLLgROwsx8"
            alt={fullName(profile)}
          />
          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
            {fullName(profile)}
          </h5>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {profile.jobTitle}
          </span>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white p-2">
            {profile.slogan}
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 p-2">
            {profile.about}
          </p>
          <div className="mt-4 flex space-x-3 lg:mt-6">
            <React.Fragment>
              <Button
                outline={false}
                onClick={() => setShowContact(!showContact)}
                color={"red"}
              >
                Contact
              </Button>
              <Modal show={showContact} onClose={() => setShowContact(false)}>
                <Modal.Header>Contact</Modal.Header>
                <Modal.Body>
                  <div className="space-y-6">
                    <MyContact contacts={profile.contacts} />
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button onClick={() => setShowContact(false)} color={"red"}>
                    OK
                  </Button>
                  <Button color="gray" onClick={() => setShowContact(false)}>
                    Cancel
                  </Button>
                </Modal.Footer>
              </Modal>
            </React.Fragment>
          </div>
        </div>
      </Card>
      <div className="w-full mt-8 flex flex-col lg:flex-row">
        <Card
          className="w-full mt-6 lg:mt-0 lg:mr-4 flex-1 justify-center"
          id="education"
        >
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Education
          </h5>
          <div className="flex justify-center px-4 pt-4">
            <MyEducation educations={profile.educations} />
          </div>
        </Card>
        <Card
          className="w-full mt-8 lg:mt-0 lg:ml-4 flex-1 justify-start"
          id="experience"
        >
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Experience
          </h5>
          <div className="flex justify-center px-4 pt-4">
            <MyJobExperience experiences={profile.jobExperiences} />
          </div>
        </Card>
      </div>
      <motion.div
        className="w-full mt-8 flex flex-col lg:flex-row"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: false, amount: 0.8 }}
      >
        <Card
          className="w-full mt-6 lg:mt-0 lg:mr-4 flex-1 lg:w-1/2 justify-center"
          id="language"
        >
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Languages
          </h5>

          <div className="flex justify-start lg:justify-center px-4 pt-4">
            <MyLanguage langs={profile.languages} />
          </div>
        </Card>
        <Card
          className="w-full mt-6 lg:mt-0 lg:ml-4 flex-1 justify-center lg:w-1/2"
          id="certificate"
        >
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Certificates
          </h5>
          <div className="flex justify-start lg:justify-center px-4 pt-4">
            <MyCertificate certs={profile.certificates} />
          </div>
        </Card>
      </motion.div>
      <div className="w-full mt-8 flex flex-col lg:flex-row">
        <Card className="w-full">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Publications
          </h5>
          <div className="flex justify-center px-4 pt-4">
            <Publications publications={profile.publications} />
          </div>
        </Card>
      </div>
      <div className="w-full mt-8 flex flex-col lg:flex-row">
        <Card className="w-full">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Skills
          </h5>
          <div className="flex justify-center px-4 pt-4">
            <Skills profile={profile} />
          </div>
        </Card>
      </div>
      <div className="w-full mt-8 flex flex-col lg:flex-row">
        <Card className="w-full">
          <h5 className="text-2xl font-bold text-gray-900 dark:text-white text-center">
            Interest
          </h5>
          <div className="flex justify-center px-4 pt-4">
            <Interests interests={profile.interests} />
          </div>
        </Card>
      </div>
    </div>
  );
};
export default MainInfo;
