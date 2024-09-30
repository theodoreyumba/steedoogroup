'use client';
import { LoadingOverlay } from "@mantine/core";

interface AppLoadingProps {
    visible?: boolean;
}

export function AppLoading({ visible = true }: AppLoadingProps) {
    return (
        <LoadingOverlay 
            visible={visible} 
            zIndex={1000} 
            overlayProps={{ blur: 0 }} 
            loaderProps={{ color: 'blue', type: 'bars' }} 
            transitionProps={{ transition: 'fade', duration: 0 }}
        />
    );
};