import React, { createRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import './BlogContent.scss';
import Fade from 'react-reveal/Fade';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BlogModal from './BlogModal';

const BlogContent = () => {
	let blogPosts = useSelector(state => state.postReducer.results);
	let loading = false;
	
  if(blogPosts === undefined || blogPosts.loading) {
    blogPosts = ['']
    loading = true;
  } else {
    loading = false
  }

	const ref = createRef();
  const [scroll, setScroll] = useState(true)

  useEffect(() => {
    const scrolledContent = document.getElementById('scroll');

    scrolledContent.addEventListener("scroll", () => {
      const scrollCheck = scrolledContent.scrollTop < 400
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck)
      }
    })
  })

  const handleScroll = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
	}

	const [modal, setModal] = useState(false);
  const [postIndex, setPostIndex] = React.useState([]);
	const [clickedPost, setClickedPost] = React.useState('');
	
  const openModal = (e, index) => {
    {!modal ? setModal(true) : setModal(false)}
    {!modal ? setPostIndex(index) : setPostIndex('')}
    {!modal ? setClickedPost(blogPosts[index]) : setClickedPost('')}
  }

  const closeModal = () => {
    { modal ? setModal(false) : setModal(true) }
  }
	
  return (
    <section className="content content--blog" id="scroll">
			{ loading ? 
							<section className="content__loading">
								<div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
								<h3>Loading projects...</h3>
							</section>
			:
							<>
							{blogPosts.map(post => {
								if(post.featured === true) {
									return (
									<section className="blog__featured">
										<section className="blog__featured__image">
											<img src={post.image} alt=""/>
											<h2>Featured post</h2>
										</section>
										<section className="blog__featured__info">
											<article className="blogpost__content__header">
												<h2>{post.title}</h2>
												<h3>{post.date} - {post.time}</h3>
											</article>
											<article 
												className="blogpost__content__text blogpost__content__text--featured" 
												dangerouslySetInnerHTML={{__html: post.text}}>
											</article>
											<article className="blogpost__content__readmore">
												<h3 onClick={(e) => {
															e.preventDefault();
															openModal(e.currentTarget, blogPosts.indexOf(post))
															}}>Read more...</h3>
											</article>
										</section>
									</section>)
								} 
							})}
								<section className="blog__postlist">
									{blogPosts.map((post, index) => {
										if(post.featured === false) {
											return(
												<Fade up>
													<article 
														className="blogpost"
														onClick={(e) => {
															e.preventDefault();
															openModal(e.currentTarget, blogPosts.indexOf(post))
															}}>
														<section className="blogpost__content">
															<article className="blogpost__content__header">
																<h2>{post.title}</h2>
																<h3>{post.date} - {post.time}</h3>
															</article>
															<article className="blogpost__content__text">
																<p dangerouslySetInnerHTML={{__html: post.short}}></p>
															</article>
															<article className="blogpost__content__readmore">
																<h3>Read more...</h3>
															</article>
														</section>
														<section className="blogpost__image">
															<img src={post.image} alt=""/>
														</section>
													</article>
												</Fade>
												)
										}
									})}
								</section>
							</>
			}
			{!scroll ? 
      <article
        className="scroll"
        id="scrollbutton" 
        onClick={handleScroll}>
          <ArrowUpwardIcon/>
      </article> 
      : null
    }
		{ modal ? 
			<BlogModal 
				closeModal={closeModal}
				postIndex={postIndex}
				clickedPost={clickedPost}/> 
			: null }
			</section>
  );
}

export default BlogContent;
