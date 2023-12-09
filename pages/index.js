import Head from "next/head";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { motion, AnimatePresence } from "framer-motion";

// icons
import { Globe } from "../components/icons";

// components
import Inputpassword from "../components/Passwordinput";

// styles
import styles from "../styles/Login.module.css";

// image
import { Logo } from "../components/images";

// authorization
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";

function Heading() {
  return (
    <div className={styles.heading}>
      <div className=" flex ">
        <Globe className="my-2 mx-3" />
        <h1>Admin Login</h1>
      </div>
    </div>
  );
}

function ErrorMsg({ Msg }) {
  const [Animate, setAnimate] = useState(false);

  useEffect(() => {
    if (Msg?.status === 401) {
      setAnimate(true);
    }

    if (Msg?.status === 200) {
      setAnimate(true);
    }

    setTimeout(() => {
      setAnimate(false);
    }, 5000);
  }, [Msg]);

  return (
    <AnimatePresence>
      {Animate ? (
        <motion.div
          className={
            Msg?.error === null
              ? Animate
                ? "fixed bottom-10 left-10 z-10 text-white bg-green-600 rounded-md py-4 px-6"
                : "py-0 px-0"
              : Animate
              ? "fixed bottom-10 left-10 z-10 text-white bg-red-600 rounded-md py-4 px-6"
              : "py-0 px-0"
          }
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            x: { duration: 0.3 },
            opacity: { duration: 0.3 },
            ease: [0, 0.71, 0.2, 1.01],
            scale: {
              type: "spring",
              damping: 7,
              stiffness: 100,
            },
          }}
          exit={{ x: -1000, opacity: 0 }}
        >
          {Msg?.error === null
            ? "Welcome To KnowSecret"
            : "Please Check Credentials"}
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function InputFeild({
  type = "text",
  placeholder = "Enter Here",
  label = "",
  name = "",
  ...rest
}) {
  return (
    <div className="w-full grid">
      <label className={styles.label}>
        {label}
        <input
          className=" h-[3rem] rounded-md outline-none p-4 bg-black  "
          type={type}
          placeholder={placeholder}
          name={name}
          {...rest}
        />
      </label>
    </div>
  );
}

function Button() {
  return (
    <div className=" flex justify-center items-center my-4 ">
      <button
        type="submit"
        className=" transition-all  py-3 px-8 rounded-md text-[#ff9d00] border-2 border-[#ff9d00] hover:bg-[#ff9d00] hover:text-white "
      >
        Submit
      </button>
    </div>
  );
}

export default function AdminLogin() {
  const [errMsg, setErrmsg] = useState();

  const session = useSession();
  const Router = useRouter();
  if (session.status === "authenticated") {
    Router.push("/admin");
  }

  const onSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    let formData = new FormData(form);
    formData = Object.fromEntries([...formData.entries()]);

    try {
      const req = await signIn("credentials", {
        email: formData.Email,
        password: formData.Password,
        redirect: false,
      });
      setErrmsg(req);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Head>
        <title>Admin Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <ErrorMsg Msg={errMsg} />
        <div className={styles.mainLayout}>
          <div className="p-4 h-[10%]">
            <Image src={Logo} alt="Logo " />
          </div>
          <div className="h-[90%] flex justify-center items-center  ">
            <div className={styles.formBox}>
              <Heading />
              <motion.div className="flex">
                <form onSubmit={onSubmit} className="w-full h-full">
                  <div className="py-4 grid w-full h-full  ">
                    <InputFeild
                      placeholder="Enter Email"
                      label="Email"
                      name="Email"
                      type="email"
                    />
                    <Inputpassword
                      placeholder="Enter Password"
                      label="Password"
                      name="Password"
                      type="password"
                    />
                    <Button />
                  </div>
                </form>
                {/* <form onSubmit={onSubmit} className="w-full h-full">
                  <div className="py-4 grid w-full h-full  ">
                    <InputFeild placeholder="Enter Email" label="Email" name="Email" type="email" />
                    <InputFeild placeholder="Name" label="Enter Your Name" name="Username" type="text" />
                    <Inputpassword placeholder="Enter Password" label="Password" name="Password" type="password" />
                    <Button />
                  </div>
                </form> */}
              </motion.div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
