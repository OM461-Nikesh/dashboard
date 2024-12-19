import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { PageNotFound } from '@/common/component/PageNotFound'

const dynamicPages = ['abc', 'def', 'ghi', 'jkl']

const DynamicPage = () => {
  const router = useRouter();
  const ValidPage = dynamicPages.some((item) =>  item === router.query.slug); 
  return ValidPage ? <p>Dynamic page:{router.query.slug}</p> : <PageNotFound />;
}

export default DynamicPage
