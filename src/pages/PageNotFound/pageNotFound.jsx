import styles from './pageNotFound.module.scss'

const PageNotFound = () => {
    return (
    <div className={`${styles.bgColor} h-svh flex justify-center items-center`}>
        <h1 className='text-center text-2xl font-bold'>this page not found</h1>
    </div>
    )
}
    
export default PageNotFound;
