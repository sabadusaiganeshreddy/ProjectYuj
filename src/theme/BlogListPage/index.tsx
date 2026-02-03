import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {
  PageMetadata,
  HtmlClassNameProvider,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import BlogLayout from '@theme/BlogLayout';
import BlogListPaginator from '@theme/BlogListPaginator';
import SearchMetadata from '@theme/SearchMetadata';
import type {Props} from '@theme/BlogListPage';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

function BlogListPageMetadata(props: Props): JSX.Element {
  const {metadata} = props;
  return (
    <>
      <PageMetadata title={metadata.blogTitle} />
      <SearchMetadata tag="blog_posts_list" />
    </>
  );
}

function BlogListPageContent(props: Props): JSX.Element {
  const {metadata, items} = props;
  return (
    <div className={styles.blogListContainer}>
      <div className="container">
        <Heading as="h1" className={styles.blogTitle}>
          {metadata.blogTitle}
        </Heading>
        <div className={styles.postsList}>
          {items.map(({content: BlogPostContent}) => {
            const {metadata: postMetadata, frontMatter} = BlogPostContent;
            return (
              <article key={postMetadata.permalink} className={styles.postItem}>
                <Link to={postMetadata.permalink} className={styles.postLink}>
                  <h2 className={styles.postTitle}>{postMetadata.title}</h2>
                  <div className={styles.postMeta}>
                    <time dateTime={postMetadata.date}>
                      {new Date(postMetadata.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </time>
                    {postMetadata.readingTime && (
                      <>
                        <span className={styles.separator}>·</span>
                        <span>{Math.ceil(postMetadata.readingTime)} min read</span>
                      </>
                    )}
                  </div>
                  {postMetadata.tags && postMetadata.tags.length > 0 && (
                    <div className={styles.tags}>
                      {postMetadata.tags.map((tag) => (
                        <span key={tag.label} className={styles.tag}>
                          {tag.label}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              </article>
            );
          })}
        </div>
        <BlogListPaginator metadata={metadata} />
      </div>
    </div>
  );
}

export default function BlogListPage(props: Props): JSX.Element {
  return (
    <HtmlClassNameProvider
      className={clsx(
        ThemeClassNames.wrapper.blogPages,
        ThemeClassNames.page.blogListPage,
      )}>
      <BlogListPageMetadata {...props} />
      <BlogLayout>
        <BlogListPageContent {...props} />
      </BlogLayout>
    </HtmlClassNameProvider>
  );
}
