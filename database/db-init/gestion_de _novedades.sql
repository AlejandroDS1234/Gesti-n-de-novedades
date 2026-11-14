--
-- PostgreSQL database dump
--

\restrict duFfwmdylALabaj3wimPZOehwY2ZGTddpRR3dUAawpvNQphmdFWFHeTD95ggNaj

-- Dumped from database version 18.4 (Debian 18.4-1.pgdg13+1)
-- Dumped by pg_dump version 18.1

-- Started on 2026-11-13 22:53:54

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
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
-- TOC entry 219 (class 1259 OID 16385)
-- Name: ambientes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ambientes (
    id_ambiente character varying(20) NOT NULL,
    id_sede integer
);


ALTER TABLE public.ambientes OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16389)
-- Name: aprendices; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.aprendices (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL
);


ALTER TABLE public.aprendices OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16394)
-- Name: areas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.areas (
    id_area integer NOT NULL,
    nom_area character varying(100) NOT NULL
);


ALTER TABLE public.areas OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16591)
-- Name: categoria_tipo_novedad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categoria_tipo_novedad (
    id_categoria integer NOT NULL,
    nombre_categoria character varying NOT NULL,
    id_tipo_novedad integer NOT NULL
);


ALTER TABLE public.categoria_tipo_novedad OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16399)
-- Name: ciudades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.ciudades (
    id_ciudad character varying(5) NOT NULL,
    nombre_ciudad character varying(50) NOT NULL
);


ALTER TABLE public.ciudades OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16404)
-- Name: competencias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.competencias (
    id_competencia character varying(10) CONSTRAINT competencia_id_competencia_not_null NOT NULL,
    nom_competencia character varying(500) CONSTRAINT competencia_nom_competencia_not_null NOT NULL
);


ALTER TABLE public.competencias OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16411)
-- Name: coordinadores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.coordinadores (
    identi_user character varying(20) NOT NULL,
    id_area integer NOT NULL
);


ALTER TABLE public.coordinadores OWNER TO postgres;

--
-- TOC entry 225 (class 1259 OID 16416)
-- Name: fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.fichas (
    id_ficha character varying(10) NOT NULL,
    nom_programa character varying(100) NOT NULL
);


ALTER TABLE public.fichas OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16421)
-- Name: instructores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores (
    identi_user character varying(20) NOT NULL,
    tipo_vinculacion character varying(30) NOT NULL
);


ALTER TABLE public.instructores OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16426)
-- Name: instructores_fichas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instructores_fichas (
    identi_user character varying(20) NOT NULL,
    id_ficha character varying(10) NOT NULL,
    id_competencia character varying(10) NOT NULL
);


ALTER TABLE public.instructores_fichas OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16432)
-- Name: novedades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.novedades (
    id_novedad integer NOT NULL,
    id_tipo_novedad integer NOT NULL,
    usuarios character varying(30) NOT NULL,
    descripcion character varying(1000) NOT NULL,
    fecha_registro timestamp without time zone NOT NULL,
    id_estado boolean NOT NULL
);


ALTER TABLE public.novedades OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16443)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id_rol integer CONSTRAINT rol_id_rol_not_null NOT NULL,
    nombre_rol character varying(20) CONSTRAINT rol_nombre_rol_not_null NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16448)
-- Name: sedes; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.sedes (
    id_sede integer NOT NULL,
    nombre_sede character varying(100) NOT NULL,
    direccion character varying(50) NOT NULL,
    id_ciudad character varying(5)
);


ALTER TABLE public.sedes OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16454)
-- Name: tipo_novedad; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_novedad (
    id_tipo_novedad integer NOT NULL,
    nom_novedad character varying(50) NOT NULL
);


ALTER TABLE public.tipo_novedad OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16576)
-- Name: tipo_novedad_roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.tipo_novedad_roles (
    id_rol integer NOT NULL,
    id_tipo_novedad integer NOT NULL
);


ALTER TABLE public.tipo_novedad_roles OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16459)
-- Name: usuarios; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.usuarios (
    identi_user character varying(20) NOT NULL,
    tipo_id_user character varying(20) NOT NULL,
    nombre1_user character varying(30) NOT NULL,
    nombre2_user character varying(30),
    apellido1_user character varying(30) NOT NULL,
    apellido2_user character varying(30),
    fecha_naci_user date NOT NULL,
    genero_user character varying(20) NOT NULL,
    correo_user character varying(200) NOT NULL,
    contrasena_user character varying(260) NOT NULL,
    estado_user boolean NOT NULL,
    id_rol integer
);


ALTER TABLE public.usuarios OWNER TO postgres;

--
-- TOC entry 3541 (class 0 OID 16385)
-- Dependencies: 219
-- Data for Name: ambientes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ambientes (id_ambiente, id_sede) FROM stdin;
\.


--
-- TOC entry 3542 (class 0 OID 16389)
-- Dependencies: 220
-- Data for Name: aprendices; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.aprendices (identi_user, id_ficha) FROM stdin;
1114004410	3219121
\.


--
-- TOC entry 3543 (class 0 OID 16394)
-- Dependencies: 221
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.areas (id_area, nom_area) FROM stdin;
1	Bilingüismo
\.


--
-- TOC entry 3556 (class 0 OID 16591)
-- Dependencies: 234
-- Data for Name: categoria_tipo_novedad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categoria_tipo_novedad (id_categoria, nombre_categoria, id_tipo_novedad) FROM stdin;
1	Acceso	2
2	Climatización	2
3	Mobiliario	2
4	Equipos	2
5	Eléctrico	2
6	Aseo	2
7	Cambio de ambiente	3
8	Cambio de horario	3
9	Adelanto de formación	3
10	Reprogramación o reposición de sesión	3
11	Cancelación de sesión	3
12	Cambio de modalidad	3
13	Formación fuera del centro	3
14	Inasistencia	4
15	Llegada tarde o salida anticipada	4
16	Atención parcial de la jornada	4
17	Incapacidad médica	4
18	Permiso o licencia	4
19	Comisión o capacitación institucional	4
20	Calamidad doméstica o fuerza mayor	4
21	Solicitud de reemplazo	5
22	Reemplazo acordado con otro instructor	5
23	Intercambio de sesiones entre instructores	5
24	Inasistencia masiva o grupal de aprendices	6
25	Situación disciplinaria o de convivencia	6
26	Accidente o emergencia en formación	6
27	Falta de materiales o insumos	7
28	Falla de plataforma o conectividad	7
\.


--
-- TOC entry 3544 (class 0 OID 16399)
-- Dependencies: 222
-- Data for Name: ciudades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.ciudades (id_ciudad, nombre_ciudad) FROM stdin;
76520	Palmira
\.


--
-- TOC entry 3545 (class 0 OID 16404)
-- Dependencies: 223
-- Data for Name: competencias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.competencias (id_competencia, nom_competencia) FROM stdin;
240201526	Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz
240201524	Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo
230101507	Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales
\.


--
-- TOC entry 3546 (class 0 OID 16411)
-- Dependencies: 224
-- Data for Name: coordinadores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.coordinadores (identi_user, id_area) FROM stdin;
29098761	1
\.


--
-- TOC entry 3547 (class 0 OID 16416)
-- Dependencies: 225
-- Data for Name: fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.fichas (id_ficha, nom_programa) FROM stdin;
3219121	Análisis y Desarrollo de Software
3147823	Gestión de Recursos Humanos
\.


--
-- TOC entry 3548 (class 0 OID 16421)
-- Dependencies: 226
-- Data for Name: instructores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores (identi_user, tipo_vinculacion) FROM stdin;
1002003001	Planta
\.


--
-- TOC entry 3549 (class 0 OID 16426)
-- Dependencies: 227
-- Data for Name: instructores_fichas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.instructores_fichas (identi_user, id_ficha, id_competencia) FROM stdin;
1002003001	3219121	240201524
\.


--
-- TOC entry 3550 (class 0 OID 16432)
-- Dependencies: 228
-- Data for Name: novedades; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.novedades (id_novedad, id_tipo_novedad, usuarios, descripcion, fecha_registro, id_estado) FROM stdin;
\.


--
-- TOC entry 3551 (class 0 OID 16443)
-- Dependencies: 229
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id_rol, nombre_rol) FROM stdin;
1	Aprendiz
2	Instructor
3	Coordinador
4	Administrador
\.


--
-- TOC entry 3552 (class 0 OID 16448)
-- Dependencies: 230
-- Data for Name: sedes; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.sedes (id_sede, nombre_sede, direccion, id_ciudad) FROM stdin;
1	Centro de Biotecnología Industrial	Calle 40 #30-44	76520
2	SENA Sede Industrial	Carrera 33A #15-33	76520
\.


--
-- TOC entry 3553 (class 0 OID 16454)
-- Dependencies: 231
-- Data for Name: tipo_novedad; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_novedad (id_tipo_novedad, nom_novedad) FROM stdin;
1	Personal
2	Ambiente
3	Programación de la formación
4	Ausencia o disponibilidad del instructor
5	Reemplazos
6	Situaciones con el grupo
7	Recursos para la formación
\.


--
-- TOC entry 3555 (class 0 OID 16576)
-- Dependencies: 233
-- Data for Name: tipo_novedad_roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.tipo_novedad_roles (id_rol, id_tipo_novedad) FROM stdin;
1	1
1	2
2	1
2	2
2	3
2	4
2	5
2	6
2	7
\.


--
-- TOC entry 3554 (class 0 OID 16459)
-- Dependencies: 232
-- Data for Name: usuarios; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.usuarios (identi_user, tipo_id_user, nombre1_user, nombre2_user, apellido1_user, apellido2_user, fecha_naci_user, genero_user, correo_user, contrasena_user, estado_user, id_rol) FROM stdin;
1114004410	TI	María	Angélica	Benavides	Cabezas	2010-03-29	Femenino	benavidescabezas.angelica@gmail.com	Sena123	t	1
27123456	CC	Carlos	Andrés	Romero	Gómez	1985-06-20	Masculino	carlos.moreno@sena.edu.co	Instructor123	t	2
25678907	CC	Miguel	Camilo	López	Galán	1998-10-09	Masculino	miguel.López@sena.edu.co	Coordinador123	t	3
29098761	CC	Miosotis		Cárdenas		1972-06-03	Femenino	Miosotis.Cardenas@sena.edu.co	CoordinadoraIngles001	t	3
79123456	CC	Carlos	Andrés	Moreno	Gómez	1985-06-20	Masculino	carlos.moreno001@sena.edu.co	Sena1	t	2
52345678	CC	Diana	Marcela	Torres	Ruiz	1982-09-12	Femenino	diana.torres002@sena.edu.co	Sena2	t	2
94321678	CC	Jorge	Alberto	Ramírez	Pérez	1979-03-08	Masculino	jorge.ramirez003@sena.edu.co	Sena03	t	2
66789123	CC	Natalia		Castro	Méndez	1988-12-01	Femenino	natalia.castro004@sena.edu.co	Sena4	t	2
80234567	CC	Felipe	Eduardo	Rojas		1990-07-15	Masculino	felipe.rojas005@sena.edu.co	Sena12345	t	2
1002003005	CC	Andrés	Felipe	Vargas	Díaz	2005-04-26	Masculino	andres.vargas005@soy.sena.edu.co	Sena005	t	1
1002003004	TI	Samuel		Moreno	Rojas	2007-08-17	Masculino	samuel.moreno004@soy.sena.edu.co	Sena004	t	1
1002003002	TI	Juan	David	Gómez	Castro	2007-11-22	Masculino	juan.gomez002@soy.sena.edu.co	scrypt:32768:8:1$aood7aJGsX6d1HWg$7fc7954f1fed00a1fbca2edd96ed49faf70c8bf3ad68e7b3b796bbcd9552e25b49f0c5b084a3e32a158fff149f93fcb383ab1d845f1599e1d79a19ac2739eff5	t	1
1002003001	TI	Laura	Isabel	Ramirez		2009-10-21	Femenino	laura.ramirez@sena.edu.co	scrypt:32768:8:1$En20hZs1YpYwLeXN$5b405e44f2b369bdd304c7faadd667eea248bf8ca44a199a76f02f9b35919b30d26dd8c794c2ef36fe4003ccc021588f8010b076f23083fdf7f9c2e0c65b94ee	t	2
1002003003	TI	Valentina	Sofía	López	Martínez	2008-02-09	Femenino	valentina.lopez003@soy.sena.edu.co	scrypt:32768:8:1$CTaq2yDIMwv0A5Ew$9425196b4462e12d410d18eb3523e0489bf31e656892eb6705bdaa86641aac4bd1ebb8be30c8e953e1a75eb152b91fcf4d2122ce4b2fc516b92be8c5e3b82b06	t	4
\.


--
-- TOC entry 3349 (class 2606 OID 16474)
-- Name: ambientes ambientes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_pkey PRIMARY KEY (id_ambiente);


--
-- TOC entry 3353 (class 2606 OID 16476)
-- Name: areas areas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT areas_pkey PRIMARY KEY (id_area);


--
-- TOC entry 3377 (class 2606 OID 16599)
-- Name: categoria_tipo_novedad categoria_tipo_novedad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_tipo_novedad
    ADD CONSTRAINT categoria_tipo_novedad_pkey PRIMARY KEY (id_categoria);


--
-- TOC entry 3355 (class 2606 OID 16478)
-- Name: ciudades ciudades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ciudades
    ADD CONSTRAINT ciudades_pkey PRIMARY KEY (id_ciudad);


--
-- TOC entry 3357 (class 2606 OID 16480)
-- Name: competencias competencia_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.competencias
    ADD CONSTRAINT competencia_pkey PRIMARY KEY (id_competencia);


--
-- TOC entry 3361 (class 2606 OID 16482)
-- Name: fichas fichas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.fichas
    ADD CONSTRAINT fichas_pkey PRIMARY KEY (id_ficha);


--
-- TOC entry 3367 (class 2606 OID 16484)
-- Name: novedades novedades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT novedades_pkey PRIMARY KEY (id_novedad);


--
-- TOC entry 3351 (class 2606 OID 16486)
-- Name: aprendices pk_aprendices; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT pk_aprendices PRIMARY KEY (identi_user);


--
-- TOC entry 3359 (class 2606 OID 16488)
-- Name: coordinadores pk_coordinadores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT pk_coordinadores PRIMARY KEY (identi_user);


--
-- TOC entry 3363 (class 2606 OID 16490)
-- Name: instructores pk_instructores; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT pk_instructores PRIMARY KEY (identi_user);


--
-- TOC entry 3365 (class 2606 OID 16492)
-- Name: instructores_fichas pk_instructores_fichas; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT pk_instructores_fichas PRIMARY KEY (identi_user, id_ficha, id_competencia);


--
-- TOC entry 3369 (class 2606 OID 16494)
-- Name: roles rol_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT rol_pkey PRIMARY KEY (id_rol);


--
-- TOC entry 3371 (class 2606 OID 16496)
-- Name: sedes sedes_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_pkey PRIMARY KEY (id_sede);


--
-- TOC entry 3373 (class 2606 OID 16498)
-- Name: tipo_novedad tipo_novedad_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_novedad
    ADD CONSTRAINT tipo_novedad_pkey PRIMARY KEY (id_tipo_novedad);


--
-- TOC entry 3375 (class 2606 OID 16500)
-- Name: usuarios usuarios_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (identi_user);


--
-- TOC entry 3378 (class 2606 OID 16501)
-- Name: ambientes ambientes_id_sede_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.ambientes
    ADD CONSTRAINT ambientes_id_sede_fkey FOREIGN KEY (id_sede) REFERENCES public.sedes(id_sede);


--
-- TOC entry 3379 (class 2606 OID 16506)
-- Name: aprendices fk_aprendices_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 3380 (class 2606 OID 16511)
-- Name: aprendices fk_aprendices_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.aprendices
    ADD CONSTRAINT fk_aprendices_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3381 (class 2606 OID 16516)
-- Name: coordinadores fk_coordinadores_areas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_areas FOREIGN KEY (id_area) REFERENCES public.areas(id_area);


--
-- TOC entry 3382 (class 2606 OID 16521)
-- Name: coordinadores fk_coordinadores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.coordinadores
    ADD CONSTRAINT fk_coordinadores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3384 (class 2606 OID 16526)
-- Name: instructores_fichas fk_id_competencias; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_competencias FOREIGN KEY (id_competencia) REFERENCES public.competencias(id_competencia);


--
-- TOC entry 3385 (class 2606 OID 16531)
-- Name: instructores_fichas fk_id_fichas; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_fichas FOREIGN KEY (id_ficha) REFERENCES public.fichas(id_ficha);


--
-- TOC entry 3386 (class 2606 OID 16536)
-- Name: instructores_fichas fk_id_instructores; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores_fichas
    ADD CONSTRAINT fk_id_instructores FOREIGN KEY (identi_user) REFERENCES public.instructores(identi_user);


--
-- TOC entry 3383 (class 2606 OID 16541)
-- Name: instructores fk_instructores_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instructores
    ADD CONSTRAINT fk_instructores_usuarios FOREIGN KEY (identi_user) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3387 (class 2606 OID 16546)
-- Name: novedades fk_novedades_tipo; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_tipo FOREIGN KEY (id_tipo_novedad) REFERENCES public.tipo_novedad(id_tipo_novedad);


--
-- TOC entry 3388 (class 2606 OID 16551)
-- Name: novedades fk_novedades_usuarios; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.novedades
    ADD CONSTRAINT fk_novedades_usuarios FOREIGN KEY (usuarios) REFERENCES public.usuarios(identi_user);


--
-- TOC entry 3391 (class 2606 OID 16581)
-- Name: tipo_novedad_roles id_rol; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_novedad_roles
    ADD CONSTRAINT id_rol FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);


--
-- TOC entry 3393 (class 2606 OID 16601)
-- Name: categoria_tipo_novedad id_tipo_novedad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categoria_tipo_novedad
    ADD CONSTRAINT id_tipo_novedad FOREIGN KEY (id_tipo_novedad) REFERENCES public.tipo_novedad(id_tipo_novedad) NOT VALID;


--
-- TOC entry 3392 (class 2606 OID 16586)
-- Name: tipo_novedad_roles id_tipo_novedad; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.tipo_novedad_roles
    ADD CONSTRAINT id_tipo_novedad FOREIGN KEY (id_tipo_novedad) REFERENCES public.tipo_novedad(id_tipo_novedad);


--
-- TOC entry 3389 (class 2606 OID 16556)
-- Name: sedes sedes_id_ciudad_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.sedes
    ADD CONSTRAINT sedes_id_ciudad_fkey FOREIGN KEY (id_ciudad) REFERENCES public.ciudades(id_ciudad);


--
-- TOC entry 3390 (class 2606 OID 16561)
-- Name: usuarios usuarios_id_rol_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_id_rol_fkey FOREIGN KEY (id_rol) REFERENCES public.roles(id_rol);


-- Completed on 2026-11-13 22:53:55

--
-- PostgreSQL database dump complete
--

\unrestrict duFfwmdylALabaj3wimPZOehwY2ZGTddpRR3dUAawpvNQphmdFWFHeTD95ggNaj

