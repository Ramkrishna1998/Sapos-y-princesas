import cn from 'classnames';
import { Button } from '@components/atoms/Button';
import buttonstyle from '@components/atoms/Button/button.module.scss';
import { ModalComponent } from '@components/atoms/Modal';
import { Advertisement } from '@components/molecules/advertisement';
import { ArticleContent } from '@components/molecules/artical-content';
import { Banner } from '@components/molecules/banner';
import { Commentsmodal } from '@components/molecules/comment-modal';
import { DigitalMagazine } from '@components/molecules/digital-magazin';
import { DonotMiss } from '@components/molecules/do-not-miss';
import { IconList } from '@components/molecules/icon-list';
import { LikeArtical } from '@components/molecules/like-artical';
import { ProfileInfo } from '@components/molecules/profile-info';
import { Subscritpion } from '@components/molecules/subscription';
import { Suggestion } from '@components/molecules/suggestion';
import { TagList } from '@components/molecules/tag-list';
import { Footer } from '@components/organisms/footer';
import { Header } from '@components/organisms/header';
import RightArrow1 from '@resources/images/svg/rightarrow1.svg';
import saveIcon from '@resources/images/svg/save.svg';

const Article2 = () => {
  return (
    <>
      <div className='page-body'>
     
        <Header />
        <Advertisement />
        <Banner
          bannerdesc='En junio se estrenó en Netflix una serie con un mensaje de alcance que nos invita a pensar: ¿dónde están los límites de nuestra intimidad?'
          bannertitle='Intimidad: las enseñanzas de una miniserie con problemáticas reales de la era digital'
          className='pt_2'
          showbannerdesc={true}
          showbannertitle={true}
          showsubtitle={true}
          subtitle='consejos • salud infantil'
        />
        <ArticleContent />
        <section className='container '>
          <div className='artical_wrapper  '>
            <LikeArtical className=' gray_container border_section_radius mb_2' />
            <TagList className='mt_2 mb_2' />
            <IconList
              showfacebookiconarticle
              showmailicon
              showshareicon
              showtwittericon
              showwhatsappicon
            />
            <div className='text_center mb_22'>
              <Button showicon className={cn(buttonstyle.btn_icon_with, buttonstyle.btn_invert, 'mt_1')} Icon={saveIcon}>
                Guárdalo para leer más tarde
              </Button>
            </div>
            
              <ProfileInfo profiledesc = 'Quo vel veniam enim eaque vitae. Omnis explicabo odio officia voluptas sunt corrupti ut. At rerum impedit consequatur amet. Consequatur in facilis blanditiis harum vitae sed earum nisi.' profileTitleclassName='text_underline'  showprofiledesc = {true} showprofilquote = {false}  showusericon= {false} />
              <Button showicon className={cn(buttonstyle.btn_icon_aprat, 'mt_1 mb_2')} Icon={RightArrow1}>
              Comentarios (65)
            </Button>
          </div>
        </section>
        <Advertisement />
        <Subscritpion />
        <Suggestion />
        <DonotMiss />
        <DigitalMagazine />
        <Footer />
        <ModalComponent className='p0' isbuttonvisible={false} isOpen={true} >
            <Commentsmodal  />
        </ModalComponent>
      </div>
    </>
  );
};

export default Article2;
