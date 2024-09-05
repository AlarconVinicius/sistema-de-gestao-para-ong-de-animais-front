import React from 'react';
import './Header.css';
import { Breadcrumb } from 'flowbite-react';
import { BreadcrumbModel } from '../../models/ComponentsModels';
import catImg from '../../assets/cat.svg';
import pawsImg from '../../assets/patas2.svg';

const Header: React.FC<{ breadcrumbItems: BreadcrumbModel[] }> = ({ breadcrumbItems }) => {
  return (
    <div>
      <div className='w-full bg-header-svg overflow-x-hidden'>
        <div className='max-w-screen-xl mx-auto h-36 py-4 lg:px-10 px-4 relative'>
          <div className='cat'>
            <img src={catImg} alt="Cat" className='cat-image' />
          </div>
          <div className='paws2'>
            <img src={pawsImg} alt="Paws" className='paws2-image' />
          </div>
          <Breadcrumb className="bg-transparent my-breadcrumb">
            {breadcrumbItems.map((item, index) => (
              item.href ? (
                <Breadcrumb.Item href={item.href} key={index} className='breadcrumb-item'>
                  {item.label}
                </Breadcrumb.Item>
              ) : (
                <Breadcrumb.Item key={index} className='breadcrumb-item-active'>
                  {item.label}
                </Breadcrumb.Item>
              )
            ))}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default Header;
