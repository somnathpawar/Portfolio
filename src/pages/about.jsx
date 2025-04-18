import Image from 'next/future/image';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import { Container } from '@/components/Container';
import {
  TwitterIcon,
  StackOverflowIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
} from '@/components/Icons';
import portraitImage from '@/images/profile.jpg';

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-amber-600 dark:text-zinc-200 dark:hover:text-amber-600"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-amber-600" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Somnath Pawar</title>
        <meta
          name="description"
          content="I'm Somnath Pawar. I'm a software professional, lives in Pune India."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 sm:rotate-0 md:rotate-3"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I&apos;m Somnath Pawar. A Software Professional, lives in Pune, India.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I have loved making things for as long as I can remember, I
                wrote my first program in BASIC.
              </p>
              <p>
                Apart from programming, I enjoy long drives, books, and spending quality time with my family and friends.
                I am a social person who is always looking to expand my network.
              </p>
              <p>
                Professionally, I have been a software engineer for more than 16
                years. I&apos;ve worked at startups and large companies, and
                worked on everything from mobile apps, web apps to backend
                services including cloud & devops. I am also a mentor and a
                tech lead across multiple teams on multiple technologies.
              </p>
              <p>
                Today, I am a Sr. Solutions Architect at Tech9, where I work with
                variety of technologies including PHP, Golang, JS, AngularJS, AWS, Kubernetes, Docker, Ansible, Terraform, CDK, Bash,
                PostgreSQL, MongoDB, Redis and RabbitMQ. I am enthusiastic into cloud computing, security and devops areas, achieved 8x AWS
                certifications and Kubernetes CKAD certification. I love architecting things and see them implemented in a right & secure way.
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/somnathpawar"
                aria-label="Follow on GitHub"
                icon={GitHubIcon}
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/somnathpawar/"
                aria-label="Follow on LinkedIn"
                icon={LinkedInIcon}
                className="mt-4"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="https://stackoverflow.com/users/745350/somnath-pawar"
                aria-label="Follow on Stackoverflow"
                icon={StackOverflowIcon}
                className="mt-4"
              >
                Follow on Stackoverflow
              </SocialLink>
              <SocialLink
                href="mailto:info.somnathpawar@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                info.somnathpawar@gmail.com
              </SocialLink>
              <SocialLink
                href="tel:+919890984420"
                icon={PhoneIcon}
                className="mt-4"
              >
                (+91) 989-098-4420
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
}
