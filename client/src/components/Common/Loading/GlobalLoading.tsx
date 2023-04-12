import { Spin } from 'antd';
import './styles.scss';

function GlobalLoading() {
	return (
		<div className='loading-global'>
			<Spin
				style={{
					
				}}
				size="large"
				className="Global-Loading trans-center"
				tip={'loading...'}
			/>
		</div>
	);
}

export default GlobalLoading;
