import Link from '@docusaurus/Link';
import React, { useEffect, useMemo, useState } from 'react';

const REPOSITORIES = [
  'openapistack/docs',
  'openapistack/openapi-backend',
  'openapistack/openapi-client-axios',
  'openapistack/openapicmd',
]

export const GithubStarsButton = () => {
  const [starsMap, setStarsMap] = useState<{ [key: string]: number }>({});

  const fetchStars = async () => {
    return await Promise.all(
      REPOSITORIES.map(async (repo) => {
        const res = await fetch(['https://api.github.com/repos', repo].join('/'))

        const data = (await res.json()) as { stargazers_count: number };

        if (typeof data?.stargazers_count === 'number') {
          setStarsMap((prev) => ({ ...prev, [repo]: data.stargazers_count }));
        }
      })
    );
  };

  useEffect(() => {
    fetchStars().catch(console.error);
  }, []);

  const stars = useMemo(() => {
    return Object.values(starsMap)
      .reduce((acc, curr) => acc + curr, 0);
  }, [starsMap])

  return (
    <Link
      className="button button--secondary button--lg space-x-1 mb-2 align-middle"
      to="https://github.com/openapistack/docs"
    >
      <span>☆</span>
      <span>Star</span>
      <span className="text-sm relative bottom-[1px]">
        {stars ? `(${stars})` : '...'}
      </span>
    </Link>
  );
};
