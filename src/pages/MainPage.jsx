import React from 'react';
import GameDisplaySection from 'components/sections/GameDisplaySection/index';
import LeaderListSection from 'components/sections/LeaderListSection/index';
import style from './MainPage.module.css';

const MainPage = () => (
  <section className={style.game__container}>
    <GameDisplaySection />
    <LeaderListSection />
  </section>
);

export default MainPage;
