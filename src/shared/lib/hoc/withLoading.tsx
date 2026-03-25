import type { ComponentType } from "react";
import styles from './withLoading.module.css';

interface WithLoadingProps{
    isLoading: boolean;
}

export const withLoading = <P extends object>(
    WrappedComponent: ComponentType<P>
) => {
    const ComponentWithLoading = (props: P & WithLoadingProps) =>{
        const {isLoading, ...restProps} = props;

        if(isLoading) {
            return <div className={styles.loadinng}>Загрузка</div>;
        }

        return <WrappedComponent {...(restProps as P)} />

    };

    return ComponentWithLoading;
}