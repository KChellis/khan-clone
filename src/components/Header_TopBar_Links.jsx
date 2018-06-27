import React from 'react';
import Link from './Header_TopBar_Links_Link';

function Links(){
  const links = [
    {
      name: 'Donate',
      path: '/'
    },
    {
      name: 'Login',
      path: '/'
    },
    {
      name: 'Sign up',
      path: '/'
    }
  ];
  return(
    <div className='links'>
      <style jsx>{`
          .links {
            display: flex;
            justify-content: space-between;
          }
       `}
      </style>
      {links.map((link, index) =>
        <Link name={link.name}
          path={link.path}
          key={index} />
      )}
    </div>
  );
}

export default Links;
