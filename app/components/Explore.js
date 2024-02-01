import React from 'react';
const ExploreComponent = ({name}) =>{
    return(
        <div className='bg-[#006B8D] hover:bg-[#3288a3] transition-colors duration-300 py-2 text-white px-2'>
            {name}
        </div>
    )
}

const Explore = () => {
    return (
        <div className='flex justify-between space-x-4 '>
            <ExploreComponent name=" Explore Saadiyat Logoons"/>
            <ExploreComponent name="  Explore Yas golf Collection"/>

        
        </div>
    );
}

export default Explore;
