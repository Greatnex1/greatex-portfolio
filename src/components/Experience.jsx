import React from 'react'
import javascript from '../assert/javascript.png';
import reactImage from '../assert/react.png';
import nextjs from '../assert/nextjs.png';
import aws from '../assert/aws.jpeg';
import github from '../assert/github.png';
import cloudinary from '../assert/cloudinary.png';
import docker from '../assert/docky.png';
import dsa from '../assert/dsa.jpeg';
import express from '../assert/express.png';
import vercel from '../assert/vercel.png';
import java from '../assert/ja.png';
import go from '../assert/golg.jpg';
import mockito from '../assert/mockito.png';
import mongo from '../assert/mong.png';
import mysql from '../assert/mysql.png';
import node from '../assert/node.png';
import postgresql from '../assert/postgresql.png';
import postman from '../assert/posty.png';
import python from '../assert/python.jpeg';
import spring from '../assert/spring1.png';
import typescript from '../assert/typsrcpt.png';
import tailwind from '../assert/tailwind.png';
import html from  '../assert/html.png';
import css from '../assert/css.png';
import jestImg from '../assert/jest.png';
const Experience = () => {

    const techs = [
        {
            id: 1,
            src: java,
            title: "",
            style: "shadow-orange-500"
        },

        {
            id: 2,
            src: spring,
            title: "",
            style: "shadow-green-500"
        },

        {
            id: 3,
            src: javascript,
            title: "",
            style: "shadow-yellow-500"
        },

        {
            id: 4,
            src: reactImage,
            title: "",
            style: "shadow-blue-600"
        },

        {
            id: 5,
            src: nextjs,
            title: "",
            style: "shadow-white"
        },

        {
            id: 6,
            src: aws,
            title: "",
            style: "shadow-gray-400"
        },

        {
            id: 7,
            src: github,
            title: "",
            style: "shadow-blue-500"
        },

        {
            id: 8,
            src: postman,
            title: "",
            style: "shadow-orange-400"
        },

        {
            id: 9,
            src: cloudinary,
            title: "",
            style: "shadow-sky-400"
        },

        {
            id: 10,
            src: postgresql,
            title: "",
            style: "shadow-sky-400"
        },

        {
            id: 11,
            src: docker,
            title: "",
            style: "shadow-sky-400"
        },

        {
            id: 12,
            src: node,
            title: "",
            style: "shadow-green-400"
        },

        {
            id: 13,
            src: vercel,
            title: "",
            style: "shadow-sky-400"
        },

        {
            id: 14,
            src: express,
            title: "",
            style: "shadow-sky-400"
        },

        {
            id: 15,
            src:mongo ,
            title: "",
            style: "shadow-green-400"
        },
        {
            id: 16,
            src: dsa,
            title: "",
            style: "shadow-gray-400"
        }
        ,
        {
            id: 17,
            src: typescript,
            title: "",
            style: "shadow-sky-400"
        },
        {
            id: 18,
            src:go,
            title: "",
            style: "shadow-sky-400"
        },
        {
            id: 19,
            src:tailwind,
            title: "",
            style: "shadow-sky-400"
        },
        {
            id: 20,
            src:jestImg,
            title: " ",
            style: "shadow-sky-400"
        }
       

    ]

  return (
    <div name="experience"
    className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">

    <div className="max-w-screenlg mx-auto p-4 flex flex-col justify-center 
    w-full h-full text-white"> 

            <div>
                <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                    Experience
                </p>
                <p className="py-6">
                    These are the technologies I've worked with.
                </p>
            </div>

            <div className="w-full grid grid-cols-4 sm;grid-cols-6 gap-8 text-center py-8
            px-2 sm:px-0">

                {techs.map(({id, src, title, style}) =>(
                     <div key={id} 
                     className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                     <img src={src} alt="" className="w-10 mx-auto"/>
                     <p className="mt-4">{title}</p>
                 </div>

                )
                )}

        
            </div>

        </div>

    </div>
  ) 
}

export default Experience