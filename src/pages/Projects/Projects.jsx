import React from 'react';

// components
import MainProject from '../../components/Projects/MainProject';

// shared
import HeadPage from '../../components/shared/HeadPage/HeadPage';
import HeadComponent from '../../components/shared/HeadComponent/HeadComponent';

// img
import projectIMG from '../../assets/img/projectimg.jpg'
import SmallProject from './SmallProject';
import rectangleGross from '../../assets/svg/RectangleGross.svg';

const Projects = () => {
    const projects = [
        { id: 1, img: projectIMG, using: 'HTML CSS Javasctipt', nameProject: 'Form', desc: 'Form' },
        { id: 2, img: projectIMG, using: 'HTML', nameProject: 'We', desc: 'Form' },
        { id: 3, img: projectIMG, using: 'HTML Javasctipt', nameProject: 'Form', desc: 'Form' },
        { id: 4, img: projectIMG, using: 'HTML Javasctipt', nameProject: 'Form', desc: 'Form' },
        { id: 5, img: projectIMG, using: 'HTML Javasctipt', nameProject: 'Form', desc: 'Form' },
        { id: 6, img: projectIMG, using: 'HTML Javasctipt', nameProject: 'Form', desc: 'Form' }
    ]

    const skills = [
        { id: 1, headSkill: 'Databases', bodySkill: 'SQLite PostgreSQL Mongo' },
        { id: 2, headSkill: 'Languages', bodySkill: 'TypeScript lua Python Javascript' },
        { id: 3, headSkill: 'Tools', bodySkill: 'VSCode Neovim Linux Git Front Awesome Gitlab Photoshop' },
        { id: 4, headSkill: 'Other', bodySkill: 'HTML CSS EJS SCSS Rest Jinja' },
        { id: 5, headSkill: 'Frameworks', bodySkill: 'React Vue Disnake Discord Flast Express' }
    ]

    return (
        <section className='relative mt-12'>
            <img src={rectangleGross} alt='rectangle' className='absolute rotate-180 -left-5 bottom-36 hidden lg:block' />
            <img src={rectangleGross} alt='rectangle' className='absolute right-0 top-28 hidden lg:block' />
            <div className='container'>
                <HeadPage />
                <div className='mb-12 mt-16'>
                    <HeadComponent nameComponent='complete-apps' lineHidden='hidden' hidden='hidden' />
                </div>
                <div className='flex flex-wrap gap-4 justify-evenly xl:justify-between'>
                    {projects.map(project => (
                        <MainProject key={project.id} {...project} />
                    ))}
                </div>
                <div className='mb-12 mt-20'>
                    <HeadComponent nameComponent='small-projects' lineHidden='hidden' hidden='hidden' />
                </div>
                <div className='flex flex-wrap gap-1 items-start justify-between mb-40'>
                    {skills.map(skill => (
                        <SmallProject key={skill.id} {...skill} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;