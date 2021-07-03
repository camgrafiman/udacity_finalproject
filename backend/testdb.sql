--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 13.2

-- Started on 2021-07-01 01:01:34

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 206 (class 1259 OID 21708)
-- Name: casts; Type: TABLE; Schema: public; Owner: Alejandro
--

CREATE TABLE public.casts (
    character_id integer NOT NULL,
    show_id integer NOT NULL
);


ALTER TABLE public.casts OWNER TO "Alejandro";

--
-- TOC entry 208 (class 1259 OID 21725)
-- Name: categories; Type: TABLE; Schema: public; Owner: Alejandro
--

CREATE TABLE public.categories (
    id integer NOT NULL,
    cat_type character varying,
    show_id integer
);


ALTER TABLE public.categories OWNER TO "Alejandro";

--
-- TOC entry 207 (class 1259 OID 21723)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: Alejandro
--

CREATE SEQUENCE public.categories_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_id_seq OWNER TO "Alejandro";

--
-- TOC entry 3029 (class 0 OID 0)
-- Dependencies: 207
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Alejandro
--

ALTER SEQUENCE public.categories_id_seq OWNED BY public.categories.id;


--
-- TOC entry 203 (class 1259 OID 21686)
-- Name: characters; Type: TABLE; Schema: public; Owner: Alejandro
--

CREATE TABLE public.characters (
    id integer NOT NULL,
    name character varying(150) NOT NULL,
    character_name character varying(150) NOT NULL,
    age integer,
    gender character varying(50),
    image character varying
);


ALTER TABLE public.characters OWNER TO "Alejandro";

--
-- TOC entry 202 (class 1259 OID 21684)
-- Name: characters_id_seq; Type: SEQUENCE; Schema: public; Owner: Alejandro
--

CREATE SEQUENCE public.characters_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.characters_id_seq OWNER TO "Alejandro";

--
-- TOC entry 3030 (class 0 OID 0)
-- Dependencies: 202
-- Name: characters_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Alejandro
--

ALTER SEQUENCE public.characters_id_seq OWNED BY public.characters.id;


--
-- TOC entry 205 (class 1259 OID 21697)
-- Name: shows; Type: TABLE; Schema: public; Owner: Alejandro
--

CREATE TABLE public.shows (
    id integer NOT NULL,
    title character varying NOT NULL,
    show_type character varying,
    show_description character varying,
    release_date integer NOT NULL,
    rating double precision NOT NULL
);


ALTER TABLE public.shows OWNER TO "Alejandro";

--
-- TOC entry 204 (class 1259 OID 21695)
-- Name: shows_id_seq; Type: SEQUENCE; Schema: public; Owner: Alejandro
--

CREATE SEQUENCE public.shows_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.shows_id_seq OWNER TO "Alejandro";

--
-- TOC entry 3031 (class 0 OID 0)
-- Dependencies: 204
-- Name: shows_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Alejandro
--

ALTER SEQUENCE public.shows_id_seq OWNED BY public.shows.id;


--
-- TOC entry 201 (class 1259 OID 21678)
-- Name: test; Type: TABLE; Schema: public; Owner: Alejandro
--

CREATE TABLE public.test (
    id integer NOT NULL,
    name character varying(80),
    password character varying(80)
);


ALTER TABLE public.test OWNER TO "Alejandro";

--
-- TOC entry 200 (class 1259 OID 21676)
-- Name: test_id_seq; Type: SEQUENCE; Schema: public; Owner: Alejandro
--

CREATE SEQUENCE public.test_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.test_id_seq OWNER TO "Alejandro";

--
-- TOC entry 3032 (class 0 OID 0)
-- Dependencies: 200
-- Name: test_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: Alejandro
--

ALTER SEQUENCE public.test_id_seq OWNED BY public.test.id;


--
-- TOC entry 2878 (class 2604 OID 21728)
-- Name: categories id; Type: DEFAULT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.categories ALTER COLUMN id SET DEFAULT nextval('public.categories_id_seq'::regclass);


--
-- TOC entry 2876 (class 2604 OID 21689)
-- Name: characters id; Type: DEFAULT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.characters ALTER COLUMN id SET DEFAULT nextval('public.characters_id_seq'::regclass);


--
-- TOC entry 2877 (class 2604 OID 21700)
-- Name: shows id; Type: DEFAULT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.shows ALTER COLUMN id SET DEFAULT nextval('public.shows_id_seq'::regclass);


--
-- TOC entry 2875 (class 2604 OID 21681)
-- Name: test id; Type: DEFAULT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.test ALTER COLUMN id SET DEFAULT nextval('public.test_id_seq'::regclass);


--
-- TOC entry 2888 (class 2606 OID 21712)
-- Name: casts casts_pkey; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.casts
    ADD CONSTRAINT casts_pkey PRIMARY KEY (character_id, show_id);


--
-- TOC entry 2890 (class 2606 OID 21733)
-- Name: categories categories_pkey; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_pkey PRIMARY KEY (id);


--
-- TOC entry 2882 (class 2606 OID 21694)
-- Name: characters characters_pkey; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.characters
    ADD CONSTRAINT characters_pkey PRIMARY KEY (id);


--
-- TOC entry 2884 (class 2606 OID 21705)
-- Name: shows shows_pkey; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.shows
    ADD CONSTRAINT shows_pkey PRIMARY KEY (id);


--
-- TOC entry 2886 (class 2606 OID 21707)
-- Name: shows shows_title_key; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.shows
    ADD CONSTRAINT shows_title_key UNIQUE (title);


--
-- TOC entry 2880 (class 2606 OID 21683)
-- Name: test test_pkey; Type: CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.test
    ADD CONSTRAINT test_pkey PRIMARY KEY (id);


--
-- TOC entry 2891 (class 2606 OID 21713)
-- Name: casts casts_character_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.casts
    ADD CONSTRAINT casts_character_id_fkey FOREIGN KEY (character_id) REFERENCES public.characters(id);


--
-- TOC entry 2892 (class 2606 OID 21718)
-- Name: casts casts_show_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.casts
    ADD CONSTRAINT casts_show_id_fkey FOREIGN KEY (show_id) REFERENCES public.shows(id);


--
-- TOC entry 2893 (class 2606 OID 21734)
-- Name: categories categories_show_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: Alejandro
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT categories_show_id_fkey FOREIGN KEY (show_id) REFERENCES public.shows(id);


-- Completed on 2021-07-01 01:01:34

--
-- PostgreSQL database dump complete
--

