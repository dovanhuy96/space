import { Spin } from 'antd';
import './styles.scss';

interface LoadingOverLay {
    loading: Boolean
}

function LoadingOverlay({ loading = false }: LoadingOverLay) {
    return (
        <>
            {
                loading ? (
                    <div className='loading-overlay'>
                        <Spin
                            size="large"
                            className="Global-Loading trans-center"
                            tip={'loading...'}
                        />
                    </div>
                ) : (<></>)
            }
        </>

    );
}

export default LoadingOverlay;
