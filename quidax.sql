-- Table: public.quidax_book_likes

-- DROP TABLE public.quidax_book_likes;

CREATE TABLE public.quidax_book_likes
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    book_id bigint NOT NULL,
    likes integer NOT NULL,
    user_uuid text COLLATE pg_catalog."default" NOT NULL,
    deleted boolean NOT NULL,
    CONSTRAINT quidax_book_likes_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_book_likes
    OWNER to postgres;


-- Table: public.quidax_book_tags

-- DROP TABLE public.quidax_book_tags;

CREATE TABLE public.quidax_book_tags
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    book_id bigint NOT NULL,
    tags "char" NOT NULL,
    user_uuid "char" NOT NULL,
    deleted boolean NOT NULL,
    CONSTRAINT quidax_book_tags_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_book_tags
    OWNER to postgres;

-- Table: public.quidax_books

-- DROP TABLE public.quidax_books;

CREATE TABLE public.quidax_books
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    mime_type text COLLATE pg_catalog."default" NOT NULL,
    book_picture bytea NOT NULL,
    price bigint NOT NULL,
    created_date date NOT NULL,
    created_by text COLLATE pg_catalog."default" NOT NULL,
    lastactivity_by text COLLATE pg_catalog."default" NOT NULL,
    updated_date date,
    featured boolean NOT NULL,
    featured_count bigint,
    deleted boolean,
    image_id bigint,
    CONSTRAINT quidax_books_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_books
    OWNER to postgres;

-- Table: public.quidax_books_details

-- DROP TABLE public.quidax_books_details;

CREATE TABLE public.quidax_books_details
(
    author text COLLATE pg_catalog."default" NOT NULL,
    book_id bigint NOT NULL,
    copies_sold bigint,
    created_by text COLLATE pg_catalog."default" NOT NULL,
    genre text COLLATE pg_catalog."default" NOT NULL,
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    publisher text COLLATE pg_catalog."default" NOT NULL,
    release_date date NOT NULL,
    summary text COLLATE pg_catalog."default" NOT NULL,
    title text COLLATE pg_catalog."default" NOT NULL,
    updated_by text COLLATE pg_catalog."default",
    deleted boolean NOT NULL,
    created_date date NOT NULL,
    image_id bigint,
    CONSTRAINT quidas_book_details_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_books_details
    OWNER to postgres;

COMMENT ON TABLE public.quidax_books_details
    IS 'Book Details Table';

-- Table: public.quidax_books_ratings

-- DROP TABLE public.quidax_books_ratings;

CREATE TABLE public.quidax_books_ratings
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    book_id bigint NOT NULL,
    ratings integer NOT NULL,
    user_uuid text COLLATE pg_catalog."default" NOT NULL,
    user_picture bytea NOT NULL,
    mime_type text COLLATE pg_catalog."default" NOT NULL,
    lastactivity_date date,
    created_date date,
    image_id bigint,
    CONSTRAINT quidax_books_ratings_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_books_ratings
    OWNER to postgres;

-- Table: public.quidax_books_shopping_cart

-- DROP TABLE public.quidax_books_shopping_cart;

CREATE TABLE public.quidax_books_shopping_cart
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    user_uuid text COLLATE pg_catalog."default" NOT NULL,
    book_title text COLLATE pg_catalog."default" NOT NULL,
    quantity integer NOT NULL,
    price_per_piece bigint NOT NULL,
    deleted boolean NOT NULL,
    book_id bigint NOT NULL,
    create_date date,
    CONSTRAINT quidax_books_shopping_cart_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_books_shopping_cart
    OWNER to postgres;

-- Table: public.quidax_books_users

-- DROP TABLE public.quidax_books_users;

CREATE TABLE public.quidax_books_users
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    user_uuid character(2000) COLLATE pg_catalog."default" NOT NULL,
    user_name character(100) COLLATE pg_catalog."default",
    CONSTRAINT quidax_books_users_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_books_users
    OWNER to postgres;

GRANT ALL ON TABLE public.quidax_books_users TO postgres WITH GRANT OPTION;

ALTER TABLE public.quidax_books_users
    ALTER COLUMN user_uuid SET STORAGE PLAIN;

-- Table: public.quidax_images

-- DROP TABLE public.quidax_images;

CREATE TABLE public.quidax_images
(
    id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 1000000000 CACHE 1 ),
    image_name text COLLATE pg_catalog."default",
    CONSTRAINT quidax_images_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.quidax_images
    OWNER to postgres;