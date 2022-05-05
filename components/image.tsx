import NextImage, { ImageLoader, ImageLoaderProps, ImageProps } from "next/image";

const customLoader: ImageLoader = ({ src }: ImageLoaderProps) => {
    return src
}

const Image = (props: ImageProps) => {
    return (
        <NextImage
            {...props}
            loader={customLoader}
            unoptimized={true}
            priority={false}
        />
    );
}


export default Image