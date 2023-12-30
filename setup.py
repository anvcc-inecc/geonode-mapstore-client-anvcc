#!/usr/bin/env python
# -*- coding: utf-8 -*-
#########################################################################
#
# Copyright 2018, GeoSolutions Sas.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.
#
#########################################################################
import os
from setuptools import setup, find_packages

here = os.path.abspath(os.path.dirname(__file__))
URL = "https://github.com/anvcc-inecc/geonode-mapstore-client-anvcc"
DESCRIPTION = "Use GeoNode client in your django projects"

def get_version():
    version = open('VERSION', 'r').read()
    version = version.replace('\n', '')
    return version






setup(
    name="django-geonode-mapstore-client",
    version=get_version(),
    url=URL,
    description=DESCRIPTION,
    long_description=open(os.path.join(here, 'README.md')).readline(),
    long_description_content_type='text/markdown',
    classifiers=[
        "Development Status :: 5 - Production/Stable",
        "Environment :: Web Environment",
        "Framework :: Django",
        "Intended Audience :: Developers",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
        "Topic :: Internet :: WWW/HTTP",
        "Programming Language :: Python :: 3.10",
    ],
    install_requires=open(os.path.join(here, 'install_requires.txt')).readlines(),
)

VERSION = get_version()