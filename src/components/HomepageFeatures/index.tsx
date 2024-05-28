import Heading from '@theme/Heading';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  ImgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: '複数アカウントを簡単管理',
    ImgSrc: require('@site/static/img/hero01.jpg').default,
    description: (
      <>
        Xの複数アカウントを自由自在に登録、管理できます。ログインもワンクリックで完了。
      </>
    ),
  },
  {
    title: 'ポストを一括管理',
    ImgSrc: require('@site/static/img/hero02.jpg').default,
    description: (
      <>
        投稿するポストを一括管理。CSV（スプレッドシート）での一括登録も可能。複数ポストでストーリー展開も。
      </>
    ),
  },
  {
    title: '自動予約ポスト登録',
    ImgSrc: require('@site/static/img/hero03.jpg').default,
    description: (
      <>
        投稿予約時刻のを一括で作成し、予約ポスト登録を自動で行います。ブラウザの自動操縦が終わるまで、他の作業を行えます。
      </>
    ),
  },
  {
    title: 'Windows、MacのどちらでもOK',
    ImgSrc: require('@site/static/img/hero04.jpg').default,
    description: (
      <>
        Windows、Macのどちらでも使えます。また、同時使用でなければ両方で使用することもできます。Macはアップルシリコンのみの対応でIntel版は対応していません。
      </>
    ),
  },
];

function Feature({ title, ImgSrc, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={ImgSrc} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
