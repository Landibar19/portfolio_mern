import React from 'react';
import './Styles.scss';
import { RiReactjsLine } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiMongodb } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';
import { FaNodeJs } from 'react-icons/fa';
import { BiLogoPostgresql } from 'react-icons/bi';

const Technologies = () => {
  return (
    <div className='technologies_container'>
     <h1>
        Technologies
     </h1>
     <div className='technologies_content'>
        <div className='technologies_content_icons'>
            <RiReactjsLine />
        </div>;
            <div className='technologies_content_icons' style={{color: 'rgba(45, 55, 72, 1)'  }}>
            <TbBrandNextjs />
        </div>
        <div className='technologies_content_icons' style={{color: 'green'  }}>
            <SiMongodb />
        </div>
        <div className='technologies_content_icons' style={{color: 'red'  }}>
            <DiRedis />
        </div>
        <div className='technologies_content_icons' style={{color: 'green'  }}>
            <FaNodeJs />
        </div>
        <div className='technologies_content_icons' style={{color: 'blue'  }}>
            <BiLogoPostgresql />
        </div>
     </div>
    </div>
  )
}

export default Technologies
