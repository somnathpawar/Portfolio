import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Card } from '@/components/Card';
import { Container } from '@/components/Container';
import {
  TwitterIcon,
  GitHubIcon,
  LinkedInIcon,
  StackOverflowIcon,
  BriefcaseIcon,
  CertificateIcon,
} from '@/components/Icons';
import { generateRssFeed } from '@/lib/generateRssFeed';
import { getAllBlogs } from '@/lib/getAllBlogs';
import { formatDate } from '@/lib/formatDate';
import { CERTIFICATIONS, WORK } from '@/lib/constants';
import clsx from 'clsx';

function ArrowDownIcon(props) {
  return (
      <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
        <path
            d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
      </svg>
  );
}

function Blog({ blog }) {
  return (
      <Card as="blog">
        <Card.Title href={`/blogs/${blog.slug}`}>{blog.title}</Card.Title>
        <Card.Eyebrow as="time" dateTime={blog.date} decorate>
          {formatDate(blog.date)}
        </Card.Eyebrow>
        <Card.Description>{blog.description}</Card.Description>
        <Card.Cta>Read blog</Card.Cta>
      </Card>
  );
}

function SocialLink({ icon: Icon, ...props }) {
  export default function Index() {
    return (
        <Link className="group -m-1 p-1" target="_blank" {...props}>
          <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    );
  }
  <>
  {/*
        This example requires updating your template:

function ResumeListItem({ role }) {
  return (
    <li>
      <Link
        href={role?.href || '#'}
        className={clsx(
          'flex gap-4',
          role?.href ? 'cursor-pointer' : 'cursor-auto'
        )}
      >
        <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
          {role.logo && (
            <Image
              src={role.logo}
              alt=""
              className="h-9 w-9 rounded-full"
              unoptimized
            />
          )}
        ```
        <html class="h-full">
        <body class="h-full">
        ```
      */}
  <main className="relative isolate h-screen">
    <img
        src="https://images.unsplash.com/photo-1545972154-9bb223aac798?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3050&q=80&exp=8&con=-15&sat=-75"
        alt=""
        className="absolute inset-0 -z-10 h-full w-full object-cover object-top"
    />
    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Coming Soon</h1>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-5xl">Somnath Pawar</h1>
      <p className="mt-4 text-base text-white/70 sm:mt-6">I am preparing something amazing for you. Stay tuned as I put the final touches on our website. I can’t wait to unveil our exciting new features and provide you with an unforgettable online experience. Thank you for your patience and continued support.</p>
    </div>
    <dl className="flex flex-auto flex-wrap gap-x-2">
      <dt className="sr-only">Company</dt>
      <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
        {role.company}
      </dd>
      <dt className="sr-only">Role</dt>
      <dd className="text-xs text-zinc-500 dark:text-zinc-400">
        {role.title}
      </dd>
      <dt className="sr-only">Date</dt>
      <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${role.start.label ?? role.start} until ${
              role.end.label ?? role.end
          }`}
      >
        <time dateTime={role.start.dateTime ?? role.start}>
          {role.start.label ?? role.start}
        </time>{' '}
        <span aria-hidden="true">—</span>{' '}
        <time dateTime={role.end.dateTime ?? role.end}>
          {role.end.label ?? role.end}
        </time>
      </dd>
      {role?.credential && (
          <>
            <br />
            <dt className="sr-only">Credential</dt>
            <dd className="text-xs text-zinc-500 dark:text-zinc-400">
              Credential ID: {role.credential}
            </dd>
          </>
      )}
    </dl>
  </Link>
  </li>
);
}

function Resume({ resume, title, showDownload }) {
  return (
      <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          {title === 'Work' ? (
              <BriefcaseIcon className="h-6 w-6 flex-none" />
          ) : (
              <CertificateIcon className="h-6 w-6 flex-none" />
          )}
          <span className="ml-3">{title}</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume?.map((role, roleIndex) => (
              <ResumeListItem key={roleIndex} role={role} />
          ))}
        </ol>
        {showDownload && (
            <Button
                href="https://drive.google.com/file/d/1O52_UdwWmUESfUTGR6ZzJnkoqPlr5AA3/view?usp=sharing"
                target="_blank"
                variant="secondary"
                className="group mt-6 w-full"
            >
              Download CV
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
            </Button>
        )}
      </div>
  );
}

export default function Home({ blogs }) {
  return (
      <>
      <Head>
        <title>
          Somnath Pawar
        </title>
        <meta
            name="description"
            content="Somnath Pawar"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software Professional
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Greetings, I&apos;m Somnath, a seasoned software developer and
            creative inventor residing in Pune. With a decade of professional
            experience under my belt, I specialize in crafting intricate
            applications and dynamic websites that thrive in high-speed,
            collaborative settings. My expertise lies in an array of programming
            languages and technologies, including but not limited to JavaScript
            (JS), React, Next.js, Remix, GraphQL, and Node.js. In addition, I am
            proficient in AWS and hold an AWS Certified Solution Architect -
            Associate accreditation.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
                href="https://github.com/somnathpawar"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
            />
            <SocialLink
                href="https://www.linkedin.com/in/somnathpawar/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
            />
            <SocialLink
                href="https://stackoverflow.com/users/745350/somnath-pawar"
                aria-label="Follow on Stackoverflow"
                icon={StackOverflowIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="md:mt-18 mt-16">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {blogs.map((blog) => (
                <Blog key={blog.slug} blog={blog} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume resume={CERTIFICATIONS} title="Certifications" />
            <Resume resume={WORK} showDownload title="Work" />
          </div>
        </div>
      </Container>
      </main>
</>
);
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed();
  }

  return {
    props: {
      blogs: (await getAllBlogs())
          .slice(0, 4)
          .map(({ component, ...meta }) => meta),
    },
  };
)
}

