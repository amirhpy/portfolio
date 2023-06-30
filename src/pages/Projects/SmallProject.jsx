import React from 'react';

// shared
import Button from '../../components/shared/Button/Button';

const SmallProject = ({ headSkill, bodySkill }) => {
    return (
        <div className='border w-full md:w-[47%] lg:w-[33%] border-gray'>
            <h4 className='border-b p-2 border-gray'>{headSkill}</h4>
            <div className='p-4'>
                <h4 className='text-white font-fira-500 text-2xl'>CSS expirements</h4>
                <p className='py-4'>{bodySkill}</p>
                <Button name='Live <~>' />
            </div>
        </div>
    );
};

export default SmallProject;