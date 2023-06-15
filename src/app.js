"use client";
import CatImage from "./cat4.jpg";
// import Image from 'next/image'
// import formImage from "../src/cat2.jpg"
// import { useFormik } from "formik";
import React, { useState } from "react";
import "./style.css";
// import { date } from "yup";
// import InputForm from './inputform.js'

export default function App() {
  // const formik = useFormik({
  //   initialValues: {
  //     name: "",
  //     facts: "",
  //     url: "",
  //     files: "",
  //     date: "",
  //   },
  // });

  const [name, setName] = useState("");
  const [facts, setFacts] = useState("");
  const [url, setUrl] = useState("");
  const [files, setFiles] = useState([]);
  const [date, setDate] = useState("");

  function handleChange(e) {
    setFiles([...e.target.files]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(facts);
    console.log(url);
    console.log(files);
    console.log(date);
  };

  // console.log(formik.values);

  return (
    <main className="h-screen flex items-center justify-center">
      <form
        className="bg-white flex rounded-lg w-1/2 font-latoRegular"
        onSubmit={handleSubmit}
      >
        <div className="flex-1 text-gray-700 p-20">
          <h1 className="text-3xl pb-2 font-latoBold">
            Тестовое задание в виде формы
          </h1>
          <p className="text-lg text-gray-500">Very nice!</p>
          <div className="mt-6">
            {/* Name input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="name"
              >
                Ваше имя
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="text"
                name="name"
                placeholder="Введите ваше имя"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></input>
            </div>
            {/* Textarea input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="facts"
              >
                Расскажите о себе
              </label>
              <textarea
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                name="facts"
                value={facts}
                onChange={(e) => setFacts(e.target.value)}
                placeholder="Факты о себе"
              ></textarea>
            </div>
            {/* URL input field */}
            <div className="pb-4">
              <label className="block font-latoBold text-sm pb-2" htmlFor="url">
                URL вашей компании
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="url"
                name="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="Введите URL"
              ></input>
            </div>
            {/* Pictures input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="date"
              >
                Загрузите свои фотографии
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="file"
                name="pictures"
                // value={files}
                onChange={handleChange}
                placeholder="Прикрепите картинки"
                multiple
              ></input>
            </div>
            {/* Date input field */}
            <div className="pb-4">
              <label
                className="block font-latoBold text-sm pb-2"
                htmlFor="date"
              >
                Ваша дата рождения
              </label>
              <input
                className="border-2 border-gray-500 p-2 rounded-md w-3/4 focus:border-teal-500 focus:ring-teal-500"
                type="date"
                name="date"
                placeholder="Введите дату рождения"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
              ></input>
            </div>
          </div>
          <button
            type="submit"
            className="bg-teal-500 font-latoBold text-sm text-white py-3 mt-6 mr-8 rounded-lg w-1/3"
          >
            Отправить
          </button>
          <button
            type="submit"
            className="bg-red-400 font-latoBold text-sm text-white py-3 mt-6 rounded-lg w-1/3"
          >
            Очистить
          </button>
        </div>
        <div className="relative flex-1">
          <img
            src={CatImage}
            alt="cat standing up"
            className="object-cover object-right h-full w-full rounded-lg"
          />
        </div>
      </form>
    </main>
  );
}
