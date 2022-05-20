import React from 'react';
import { Link } from 'react-router-dom';
import Tracker from '../../assests/images/Icon.png';
import classes from './CreateProject.module.css';
import { useTranslation } from 'react-i18next';
import NavBar from '../NavBar/NavBar';

const CreateProject = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <div className={classes['project-container']}>
        <div className={classes.sidebar}>
          <img src={Tracker} className={classes.sideImg} alt="" />
          <div className={classes['link-div']}>
            <Link to="/dashboard">{t('PROJECT BOARD')}</Link>
            <Link to="/create_issue">{t('CREATE ISSUES')}</Link>
            <Link to="/create_project" className={classes.active}>
              <p className={classes.link}>{t('CREATE PROJECTS')}</p>
            </Link>
          </div>
        </div>
        <div className={classes.content}>
          <NavBar flag={false} />


          <div className={classes['project']}>

            <div className={classes['input-container']}>
              <label htmlFor={classes.summary}>Project Name</label>
              <input
                type="text"
                placeholder='Project Name'
                className={classes.summary}
                name="Summary" />
            </div>


            <div className={classes['select-input']}>
              <div className={classes['input-container']}>
                <label>Owner</label>
                <select
                  className={classes.select}
                  name="Type">
                  <option disabled selected hidden value="">
                    Select
                  </option>
                  <option value="1">Owner 1</option>
                  <option value="2">Owner 2</option>
                  <option value="3">Owner 3</option>
                </select>
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes['input-container']}>
                <label htmlFor={classes.summary}>Project Start Date</label>
                <input
                  type="text"
                  placeholder='MM/DD/YYY'
                  className={classes.summary} />
              </div>
            </div>

            <div className={classes.content}>
              <div className={classes['input-container']}>
                <label htmlFor={classes.summary}>Project End Date</label>
                <input
                  type="text"
                  placeholder='mm/DD/YYY'
                  className={classes.summary}
                />
              </div>
            </div>

            <div className={classes.button}>
              <button type="reset" className={classes.reset}>RESET
              </button>
              <button type="submit" className={classes.create}>
                CREATE
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default CreateProject;
