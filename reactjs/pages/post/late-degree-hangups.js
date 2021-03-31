import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Post from '../../components/Post';
import styles from '../../styles/Four.module.scss';

export default function Custom404() {
	return (
		<div>
			<Header />
			<Post
				meta="Hangups found in the late elements of the Web Development degree and how they were solved"
				title="Navigating the Tricky Elements Near The End of the Web Degree"
				imgSrc="/coding.jpg"
			>
				<p className="mt-3">
					<blockquote className="blockquote">
						Our web development degree was put together very well.
						In much depth I have spoken with coworkers and friends
						alike expressing “jealousy” over the content we get in
						our degree compared to theirs. I have been in the
						industry for over ten years now and came in with a fair
						amount of knowledge to start. I can say however that I
						learned A TON, but there were some stumbling stones near
						the end of the degree that I ran into.
					</blockquote>
				</p>
				<h2 className="text-dark-2">Redux</h2>
				<p className="text-dark-3">
					Redux can be a game changer but coming through the degree we
					ended up in a sort of weird spot where class based React
					syntax was taught in some areas and classes, but functional
					based React syntax was also taught. With my main focus on
					functional based basically since hooks were released, I
					decided to go down this route with my Capstone course.
					Unbeknownst to me, nearly every resource dedicated to
					learning or troubleshooting Redux was for a class-based
					syntax. This led to a much more difficult learning curve and
					I would like to share some of what I learned and helped me.
				</p>
				<ul className="text-dark-3">
					<li>
						Redux hooks CAN be used with a container; however High
						Order Components are no longer necessary.
					</li>
					<li>
						Rather than using HOC, Redux intends for you to import
						the store action directly into the component you are
						intending to use.
					</li>
					<li>
						After you have imported your action, you will make use
						of the useSelector and useDispatch both imported from
						react-redux. We make use of them by using dispatch to
						run our actions, and the selector hook to pull the data
						we need from our store. See below
					</li>
					<code>
						{`import { createItem } from`}{' '}
						<br className="d-block d-md-none" />
						{`'../store/items/action'`}
					</code>
					<br />
					<code>
						{`const items = useSelector(state =>`}
						<br className="d-block d-md-none" /> {`state.items)`}
					</code>
					<br />
					<code>{`const dispatch = useDispatch()`}</code>
					<br />
					<code>
						{`<button onClick={() =>`}
						<br className="d-block d-md-none" />{' '}
						{`dispatch(createItem(item))}>`}
						<br className="d-block d-md-none" />
						{`Submit</button>`}
					</code>
				</ul>
				<h2 className="text-dark-2">Sequelize</h2>
				<p className="text-dark-3">
					Sequelize is another amazing tool but also caused me some
					headaches as well. Once you have made changes to it, you
					need to "restart" to get everything to take effect. Until
					you've "restarted it", it can make your life difficult. To
					fix this, simply undo, and re-run your migrations.
				</p>
				<code className="d-block w-100">
					sequelize db:migrate:undo:all
				</code>
				<p className="text-dark-3 mt-3">
					Once you have run this you can simply run your migrations
					again. The second issue I ran into is associations or
					foreign keys will fail unless the parent is migrated first.
					I ran into this issue as well as another student and it took
					quite some time for me to figure out the first time. I kept
					thinking my syntax on an association was wrong. When I
					figured this out finally I caused my next issue. I was not
					sure the correct way to make sure the parent was migrated
					first before the child. I changed the number and in doing
					so, was no longer able to undo my migrations.
				</p>
				<p className="text-dark-3">
					Lastly I had issues with Sequelize running in my project and
					this seems to be very widespread and common with many
					people. It typically appeared to not every pull from the
					node modules and I ran into other issues when I did a global
					install. To fix this, the solution was to path to where it
					was in the node modules. I did ultimately end up writing a
					.zshrc alias (.bashrc can be done as well) where I could
					simply write sequelize followed by the command. This is the
					pathing that gets you to sequelize if you just want to run
					it in your project.
				</p>
				<code className="d-block w-100">
					{`./node_modules/.bin/sequelize <sequel command>`}
				</code>
				<h2 className="text-dark-2 mt-3">Eslint</h2>
				<p className="text-dark-3">
					Eslint has some amazing features and helps tremendously with
					coding whether on a team or individually. One of the hang
					ups that I ran into is one of their nice features, assuming
					you know it is a feature. Eslint by default will use the{' '}
					<code>.eslintrc</code> file and path up the directory
					structure looking for additional files. This is a really
					nice feature for a project that you want to only install
					your linter in the top level. It can be quite an issue
					though if you are not aware of it as it can be pathing into
					other projects, without dependencies installed and break due
					to this. This is a pretty easy fix though, by simply
					declaring the root of the project either in the{' '}
					<code>.eslintrc</code> or <code>package.json</code> as seen
					below.
				</p>
				<code className="d-block w-100">"root": true</code>{' '}
				<h2 className="text-dark-2 mt-3">Heroku</h2>
				<p className="text-dark-3">
					Heroku is one of the last areas that I really ran into large
					issues with. As far as deployment, following their
					instructions was pretty seamless and not having to FTP still
					has to be one of the best things that has happened to us in
					our industry. Where I ran into issues however though was
					once I added postgres to heroku. Some time back in 2018
					Heroku decided that these would no longer be allowed without
					the use of a SSL. I didn't have a SSL for this, as I am sure
					many other students won't. After many frustrating nights, a
					solution was finally given. It is not a good long term
					solution, but did help with getting through the assignment
					and ultimately having a full application running. In your
					environment variable file for the api, add this code.
				</p>
				<code className="d-block w-100">"production": {`{`}</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;...rest of variables
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;"dialectOptions":{`{`}
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"ssl":{`{`}
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"require":
					true,
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"rejectUnauthorized":
					false,
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;{`}`}
				</code>
				<code className="d-block w-100">
					&emsp;&emsp;&emsp;&emsp;{`}`}
				</code>
				<code className="d-block w-100">{`}`}</code>
				<p className="text-dark-3 mt-3 mb-5">
					These were the main hang ups I ran into. I sincerly hope
					this helps even one student avoid some of the frustrating
					nights at times I ran into. The classes were fun and I
					learned more than I ever anticipated. Good luck in the
					future!
				</p>
			</Post>
			<Footer className={styles.foot} />
		</div>
	);
}
